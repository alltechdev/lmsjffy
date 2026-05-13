import { render, screen } from '@testing-library/svelte'
import { test } from 'vitest'
import Header from './Header.svelte'

test('Header', ({ expect }) => {
	render(Header)

	const img = screen.getByRole<HTMLImageElement>('img')
	expect(img).toBeDefined()
})
