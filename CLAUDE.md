# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit application using PostgreSQL for data storage, Drizzle ORM for database operations, and Better Auth for authentication. The project uses Svelte 5 (with runes), Tailwind CSS v4, TypeScript, and sveltekit-superforms for form handling.

## Development Commands

### Running the Application
```bash
npm run dev                    # Start development server
npm run dev -- --open          # Start dev server and open browser
npm run build                  # Build for production
npm run preview                # Preview production build
```

### Database Commands
```bash
npm run db:start               # Start PostgreSQL via Docker Compose
npm run db:push                # Push schema changes to database
npm run db:generate            # Generate migration files
npm run db:migrate             # Run migrations
npm run db:studio              # Open Drizzle Studio (database GUI)
```

### Code Quality
```bash
npm run check                  # Type-check with svelte-check
npm run check:watch            # Type-check in watch mode
npm run lint                   # Run prettier and eslint checks
npm run format                 # Format code with prettier
```

## Architecture

### Authentication Flow
- **Better Auth** handles all authentication with email/password
- Server-side auth config: `src/lib/auth.ts`
- Client-side auth: `src/lib/auth-client.ts`
- Session handling via `src/hooks.server.ts` using `svelteKitHandler`
- `autoSignIn: false` means users must manually sign in after signup
- Protected routes check session in `load` functions and redirect to `/dashboard` or login as needed

### Database Setup
- **Schema**: `src/lib/server/db/schema.ts` contains Drizzle schema definitions
- **Connection**: `src/lib/server/db/index.ts` exports the `db` instance
- Better Auth tables: `user`, `session`, `account`, `verification`
- Uses Drizzle relations for type-safe joins
- Database credentials in `.env` (see `.env.example`)

### Form Handling with Superforms
- Uses `sveltekit-superforms` with Zod v4 validation (`zod4` adapter)
- Pattern:
  1. Define Zod schema in `+page.server.ts`
  2. Create form with `superValidate(zod4(schema))` in load function
  3. Use `superForm(data.form)` in component to get `form`, `errors`, `constraints`, `enhance`
  4. Bind inputs with `bind:value={$form.fieldName}` and spread `{...$constraints.fieldName}`
  5. Display errors with `{#if $errors.fieldName}<Error>{$errors.fieldName}</Error>{/if}`
  6. Handle submission in server actions with `superValidate(request, zod4(schema))`

### Route Structure
- Standard SvelteKit file-based routing in `src/routes/`
- `+page.svelte`: Client-side component
- `+page.server.ts`: Server load functions and actions
- `+layout.svelte`: Shared layout (global styles in `layout.css`)
- Check session in load functions to redirect authenticated/unauthenticated users

### UI Components
- Custom UI components in `src/lib/components/ui/` built with bits-ui and Tailwind
- Components: Button, Field (with Label, Error, etc.), Input, Separator
- Uses Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Utility function `cn()` in `src/lib/utils.ts` for conditional classnames (clsx + tailwind-merge)

### Svelte 5 Runes
This project uses Svelte 5 with runes syntax:
- `$props()` for component props
- `$derived()` for derived state
- `$state()` for reactive state
- `$effect()` for side effects

## Environment Setup

1. Copy `.env.example` to `.env`
2. Set `DATABASE_URL` (default: `postgres://root:mysecretpassword@localhost:5432/local`)
3. Set `BETTER_AUTH_SECRET` (generate a secure random string)
4. Start database: `npm run db:start`
5. Push schema: `npm run db:push`

## Key Files

- `src/lib/auth.ts` - Better Auth server configuration
- `src/lib/server/db/schema.ts` - Database schema with Drizzle
- `src/hooks.server.ts` - SvelteKit hooks for auth handling
- `drizzle.config.ts` - Drizzle Kit configuration
- `compose.yaml` - PostgreSQL Docker setup
