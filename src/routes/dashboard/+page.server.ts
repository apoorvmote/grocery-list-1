import { getUser } from "$lib";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { auth } from "$lib/auth";
import { redirect, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request }) => {
    const user = await getUser(request);
    return { user };
};

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            await auth.api.signOut({
                headers: request.headers
            });
        } catch (error) {
            console.error(error);
            return fail(500, { error: 'Error logging out' });
        }
        throw redirect(302, '/login');
    }
};