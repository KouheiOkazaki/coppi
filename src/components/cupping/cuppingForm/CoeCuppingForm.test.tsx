import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CoeCuppingForm from './CoeCuppingForm'

describe('CoeCuppingForm', () => {
	test('renders form elements correctly', () => {
		render(<CoeCuppingForm />)
		expect(screen.getByText('Cupping Form')).toBeInTheDocument()
		expect(screen.getByLabelText('Sample No:')).toBeInTheDocument()
		expect(screen.getByLabelText('Roast:')).toBeInTheDocument()
		expect(screen.getByLabelText('Aroma:')).toBeInTheDocument()
		expect(screen.getByLabelText('Dry Aroma:')).toBeInTheDocument()
		expect(screen.getByLabelText('Crust Aroma:')).toBeInTheDocument()
		expect(screen.getByLabelText('Break Aroma:')).toBeInTheDocument()
		expect(screen.getByLabelText('CleanCup')).toBeInTheDocument()
		expect(screen.getByLabelText('Sweet')).toBeInTheDocument()
		expect(screen.getByLabelText('Acidity')).toBeInTheDocument()
		expect(screen.getByLabelText('Mouthfeel')).toBeInTheDocument()
		expect(screen.getByLabelText('Flavor')).toBeInTheDocument()
		expect(screen.getByText('Submit')).toBeInTheDocument()
	})

	test('displays error message when Sample No is not provided', async () => {
		render(<CoeCuppingForm />)
		fireEvent.click(screen.getByText('Submit'))
	})

	// Add more tests for other form validations and submission behavior if needed
})
