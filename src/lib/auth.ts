import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './server/db';
import { env } from '$env/dynamic/private';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';

export const auth = betterAuth({
	appName: 'Grocery List',
	secret: env.BETTER_AUTH_SECRET,
	telemetry: {
		enabled: false
	},
	database: drizzleAdapter(db, {
		provider: 'pg'
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: false
	},
	plugins: [
		sveltekitCookies(getRequestEvent)
	]
});
