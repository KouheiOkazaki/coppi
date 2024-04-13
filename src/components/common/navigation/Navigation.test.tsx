import React from 'react'
import { render, screen } from '@testing-library/react'
import TabNavigation from './Navigation'

describe('TabNavigation', () => {
	it('renders navigation links correctly', () => {
		render(<TabNavigation />)

		// Cupping リンクが存在することを確認
		const cuppingLink = screen.getByText('Cupping')
		expect(cuppingLink).toBeInTheDocument()
		expect(cuppingLink).toHaveAttribute('href', '/ja/cupping')

		// Profile リンクが存在することを確認
		const profileLink = screen.getByText('Profile')
		expect(profileLink).toBeInTheDocument()
		expect(profileLink).toHaveAttribute('href', '/ja/profile')

		// Setting リンクが存在することを確認
		const settingLink = screen.getByText('Setting')
		expect(settingLink).toBeInTheDocument()
		expect(settingLink).toHaveAttribute('href', '/ja/setting')
	})
})
