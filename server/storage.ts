import { type User, type InsertUser, type Contact, type InsertContact, users, contacts } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import bcrypt from "bcryptjs";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(insertUser.password, 12);
      const [user] = await db
        .insert(users)
        .values({ ...insertUser, password: hashedPassword })
        .returning();
      return user;
    } catch (error: any) {
      if (error.code === '23505') { // PostgreSQL unique violation
        throw new Error('Username already exists');
      }
      throw error;
    }
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    try {
      const [contact] = await db
        .insert(contacts)
        .values(insertContact)
        .returning();
      return contact;
    } catch (error: any) {
      throw new Error('Failed to create contact: ' + error.message);
    }
  }

  async getAllContacts(): Promise<Contact[]> {
    return await db
      .select()
      .from(contacts)
      .orderBy(desc(contacts.createdAt));
  }
}

export const storage = new DatabaseStorage();
