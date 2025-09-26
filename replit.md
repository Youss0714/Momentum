# Professional Services Website

## Overview

This is a modern full-stack web application for a professional services business specializing in financial consulting, software development, trading education, and business solutions. The application features a responsive single-page website with a contact form system that allows potential clients to inquire about services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI
- **Router**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Animations**: Framer Motion for smooth, professional animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints following standard HTTP conventions
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot reloading with Vite integration for efficient development

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless driver for cloud-based PostgreSQL
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios

### Component Architecture
- **UI Components**: Radix UI primitives wrapped in custom shadcn/ui components
- **Layout**: Section-based architecture with reusable components (Hero, Services, About, Portfolio, Contact, Footer)
- **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations
- **Theme System**: CSS custom properties for consistent color scheme and spacing

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Asset Handling**: Static asset serving with proper caching strategies
- **Production**: Separate client and server builds with ESM module format

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL adapter

### UI Framework Dependencies
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Animation library for smooth user interactions
- **Lucide React**: Icon library providing consistent iconography

### Development Tools
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data handling
- **date-fns**: Date manipulation and formatting utilities

### Replit Integration
- **Development Plugins**: Replit-specific Vite plugins for enhanced development experience
- **Runtime Error Handling**: Specialized error overlay for development debugging