<script>
	import { Button } from '$lib/components/ui/button';
	import { Error, Field, Label } from '$lib/components/ui/field';
	import { Input } from '$lib/components/ui/input';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	const { form, errors, constraints, enhance } = $derived(superForm(data.form));
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<main class="mx-auto my-5 max-w-3xl space-y-5">
	<header>
		<h1 class="text-2xl font-bold">Login</h1>
	</header>
	<form method="POST" class="space-y-5" use:enhance>
		<Field>
			<Label for="email">Email</Label>
			<Input
				type="email"
				id="email"
				name="email"
				bind:value={$form.email}
				{...$constraints.email}
			/>
			{#if $errors.email}
				<Error>{$errors.email}</Error>
			{/if}
		</Field>
		<Field>
			<Label for="password">Password</Label>
			<Input
				type="password"
				id="password"
				name="password"
				bind:value={$form.password}
				{...$constraints.password}
			/>
			{#if $errors.password}
				<Error>{$errors.password}</Error>
			{/if}
		</Field>
		<Button type="submit">Login</Button>
	</form>
</main>
