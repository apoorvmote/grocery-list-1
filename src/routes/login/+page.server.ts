import z4 from 'zod/v4';
import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { auth } from '$lib/auth';

const schema = z4.object({
	email: z4.email(),
	password: z4.string().min(6).max(25)
});

export const load: PageServerLoad = async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});

	if (session) {
		throw redirect(302, '/dashboard');
	}

	const form = await superValidate(zod4(schema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await auth.api.signInEmail({
				body: {
					email: form.data.email,
					password: form.data.password
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { form, error: 'Error logging in' });
		}

		throw redirect(302, '/dashboard');
	}
};
