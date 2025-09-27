# Momentum Group - Professional Digital Solutions Website

## Overview
A professional French business website for Momentum Group offering digital solutions including app development, professional websites, trading & training services, and maritime transport consulting. The site features a modern design with multiple service pages and a contact form system.

## Project Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query v5 for server state
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite with custom configuration

### Backend (Express + TypeScript)
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with bcrypt for password hashing
- **API**: RESTful endpoints for contact form and user management
- **Development**: tsx for TypeScript execution in development

### Database Schema
- **Users Table**: Basic user authentication (username, hashed password)
- **Contacts Table**: Contact form submissions (name, email, service, message, timestamp)
- **ORM**: Drizzle with Zod validation schemas

## Key Features
1. **Multi-page SPA**: Home, service pages for different business areas
2. **Contact Form**: Validated contact form with backend storage
3. **Professional Design**: Modern UI with French content
4. **Responsive**: Mobile-first design with responsive components
5. **Type Safety**: Full TypeScript coverage frontend to backend

## Development Setup
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 with allowedHosts: true for Replit proxy
- **Scripts**:
  - `npm run dev`: Start development server
  - `npm run build`: Build for production
  - `npm run start`: Start production server

## Recent Changes (Sept 27, 2025)
- Fixed tsx command not found issue by updating package.json to use `npx tsx`
- Verified Replit environment configuration (port 5000, host 0.0.0.0, allowedHosts: true)
- Confirmed all routes working correctly
- Application successfully running and tested

## User Preferences
- Professional French business website
- Clean, modern design with focus on digital services
- Full-stack application with contact form functionality
- PostgreSQL database integration required

## Services Offered
1. **Développement d'Applications**: Mobile & Desktop app development
2. **Sites Web Professionnels**: Professional website creation with SEO
3. **Trading & Formation**: Trading and training services
4. **Transit Maritime**: Maritime transport consulting