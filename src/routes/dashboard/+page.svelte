<script>
	import { Button } from '$lib/components/ui/button';

    let { data } = $props();
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<main class="mx-auto my-5 max-w-3xl space-y-5">
    <header>
        <h1 class="text-2xl font-bold">Dashboard</h1>
    </header>
    <p>Hello {data.user.name}</p>
    <form method="POST">
        <Button variant="destructive" type="submit">Logout</Button>
    </form>
</main>