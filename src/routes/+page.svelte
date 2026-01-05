<script>
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="mx-auto my-6 max-w-2xl space-y-4">
	<h1 class="text-2xl font-bold">Welcome back to Grocery list app</h1>
	<p><a href="/login"><Button>Login</Button></a></p>
	<p><a href="/register"><Button>Register</Button></a></p>
</div>
