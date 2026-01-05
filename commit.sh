#!/bin/bash

# Add all files
git add .

# Commit with detailed message
git commit -m "Initialize SvelteKit grocery list app with PostgreSQL, authentication, and UI components

Features:
- Full-stack SvelteKit grocery list app with TypeScript support
- PostgreSQL database with Drizzle ORM for type-safe queries
- Better Auth integration for email/password authentication
- User session management with secure token handling
- Authentication routes: signup, login with form validation
- Protected dashboard route with session checking
- Tailwind CSS v4 for styling with responsive design
- Svelte 5 with reactive runes for component state management
- sveltekit-superforms for form handling with Zod validation
- Reusable UI components: Button, Input, Field, Label, Error, Separator
- Docker Compose setup for PostgreSQL development environment
- Drizzle Studio support for database management

Database Schema:
- User table with email verification and timestamps
- Session table with token management and IP tracking
- Account table for auth provider support
- Verification table for email verification codes
- Drizzle relations for type-safe data access

Development Setup:
- npm run dev: Start development server
- npm run db:start: Start PostgreSQL via Docker
- npm run db:push: Sync database schema
- npm run build: Production build
- Code quality checks: ESLint, Prettier, TypeScript validation

🤖 Generated with Claude Code

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"

# Push to remote
git push -u origin main
