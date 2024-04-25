// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react'
// import SensorySelector from './SensorySelector'

// describe('SensorySelector', () => {
// 	test('renders options', async () => {
// 		const options = [1, 2, 3]
// 		const registerMock = jest.fn()

// 		const { getByTestId } = render(
// 			<SensorySelector
// 				id="sampleNo"
// 				options={options}
// 				register={registerMock}
// 			/>,
// 		)

// 		await waitFor(() => {
// 			options.forEach((option) => {
// 				const optionElement = getByTestId(`option-${option}`);
// 				expect(optionElement).toBeInTheDocument();
// 			})
// 		});
// 	})

// 	test('registers selected value', async () => {
// 		const options = [1, 2, 3]
// 		const registerMock = jest.fn()
// 		const { getByTestId } = render(
// 			<SensorySelector
// 				id="sampleNo"
// 				options={options}
// 				register={registerMock}
// 			/>,
// 		)

// 		await waitFor(() => {
// 			const selectElement = getByTestId('sampleNo');
// 			fireEvent.change(selectElement, { target: { value: '2' } })

// 			expect(registerMock).toHaveBeenCalledWith('sampleNo', {
// 				required: true,
// 			})
// 			expect(registerMock).toHaveBeenCalledWith('2', { required: true })
// 		});
// 	})
// })
