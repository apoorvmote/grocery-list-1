// place files you want to import through the `$lib` alias in this folder.

import { redirect } from "@sveltejs/kit";
import { auth } from "./auth";

export const getUser = async (request: Request) => {
    const session = await auth.api.getSession({
        headers: request.headers
    });

    if (!session) {
        throw redirect(302, '/login');
    }

    return session.user;
}