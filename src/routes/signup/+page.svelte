<script>
	import { Button } from '$lib/components/ui/button';
	import * as Field from '$lib/components/ui/field';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	const { form, errors, constraints, enhance } = $derived(superForm(data.form));
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<main class="mx-auto my-5 px-5 max-w-3xl space-y-5">
	<Card.Root>
		<Card.Header>
			<Card.Title>Sign up</Card.Title>
			<Card.Description>Sign up to create an account</Card.Description>
			<Card.Action>
				<a href="/login">
					<Button variant="link">Login</Button>
				</a>
			</Card.Action>
		</Card.Header>
		<Card.Content>
			<form method="POST" class="space-y-5" use:enhance>
				<Field.Field>
					<Field.Label for="name">Name</Field.Label>
					<Input type="text" id="name" name="name" bind:value={$form.name} {...$constraints.name} />
					{#if $errors.name}
						<Field.Error>{$errors.name}</Field.Error>
					{/if}
				</Field.Field>
				<Field.Field>
					<Field.Label for="email">Email</Field.Label>
					<Input
						type="email"
						id="email"
						name="email"
						bind:value={$form.email}
						{...$constraints.email}
					/>
					{#if $errors.email}
						<Field.Error>{$errors.email}</Field.Error>
					{/if}
				</Field.Field>
				<Field.Field>
					<Field.Label for="password">Password</Field.Label>
					<Input
						type="password"
						id="password"
						name="password"
						bind:value={$form.password}
						{...$constraints.password}
					/>
					{#if $errors.password}
						<Field.Error>{$errors.password}</Field.Error>
					{/if}
				</Field.Field>
				<Button type="submit">Sign up</Button>
			</form>
		</Card.Content>
	</Card.Root>
</main>
