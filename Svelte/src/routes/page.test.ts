import { render, screen } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@unleash/proxy-client-svelte', () => ({
	useFlag: vi.fn(),
	useFlagsStatus: vi.fn()
}));

import { useFlag, useFlagsStatus } from '@unleash/proxy-client-svelte';
import Page from './+page.svelte';

describe('+page', () => {
	it('shows loading while flags are not ready', () => {
		vi.mocked(useFlag).mockReturnValue(writable(false));
		vi.mocked(useFlagsStatus).mockReturnValue({
			flagsReady: writable(false),
			flagsError: writable(undefined)
		});

		render(Page);

		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('shows enabled message when flag is on', () => {
		vi.mocked(useFlag).mockReturnValue(writable(true));
		vi.mocked(useFlagsStatus).mockReturnValue({
			flagsReady: writable(true),
			flagsError: writable(undefined)
		});

		render(Page);

		expect(screen.getByText('Feature is enabled!')).toBeInTheDocument();
	});

	it('shows disabled message when flag is off', () => {
		vi.mocked(useFlag).mockReturnValue(writable(false));
		vi.mocked(useFlagsStatus).mockReturnValue({
			flagsReady: writable(true),
			flagsError: writable(undefined)
		});

		render(Page);

		expect(screen.getByText('Feature is disabled!')).toBeInTheDocument();
	});
});
