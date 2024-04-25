// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import CoeCuppingForm from './CoeCuppingForm';
// import { postFormAction } from './actions';

// // Mock postFormAction
// jest.mock('./actions', () => ({
//   postFormAction: jest.fn()
// }));

// describe('CoeCuppingForm', () => {
//   test('renders form fields', () => {
//     const { getByRole, getByText } = render(<CoeCuppingForm />);

//     expect(getByRole('textbox', { name: /Sample No:/i })).toBeInTheDocument();
//     expect(getByText('Aroma:')).toBeInTheDocument();
//     expect(getByText('CleanCup:')).toBeInTheDocument();
//     expect(getByText('Sweet:')).toBeInTheDocument();
//     expect(getByText('Acidity:')).toBeInTheDocument();
//     expect(getByText('Mouthfeel:')).toBeInTheDocument();
//     expect(getByText('Flavor')).toBeInTheDocument();
//   });

//   test('updates input values', () => {
//     const { getByRole } = render(<CoeCuppingForm />);
//     const sampleNoInput = getByRole('textbox', { name: /Sample No:/i }) as HTMLInputElement;
//     const roastLevelInput = getByRole('textbox', { name: /Roast:/i }) as HTMLInputElement;
//     const dryAromaInput = getByRole('slider', { name: /Dry Aroma:/i }) as HTMLInputElement;

//     fireEvent.change(sampleNoInput, { target: { value: '123' } });
//     fireEvent.change(roastLevelInput, { target: { value: 'Light' } });
//     fireEvent.change(dryAromaInput, { target: { value: '2' } });

//     expect(sampleNoInput.value).toBe('123');
//     expect(roastLevelInput.value).toBe('Light');
//     expect(dryAromaInput.value).toBe('2');
//   });

//   test('submits form', async () => {
//     const { getByText } = render(<CoeCuppingForm />);
//     const submitButton = getByText('Submit');

//     fireEvent.click(submitButton);

//     // Wait for form submission
//     await waitFor(() => {
//       expect(postFormAction).toHaveBeenCalled();
//     });
//   });
// });
