import React from 'react';
import { render, screen } from '@testing-library/react';
import SensorySelector from './SensorySelector';

describe('SensorySelector component', () => {
  const mockRegister = jest.fn(); // mock register function
  const options = [1, 2, 3]; // sample options

  it('renders select element with options', () => {
    const id = 'sampleNo'; // sample id
    render(<SensorySelector id={id} options={options} register={mockRegister} />);

    const selectElement = screen.getByRole('combobox', { name: /sampleNo/i });
    expect(selectElement).toBeInTheDocument();

    // Check if options are rendered correctly
    options.forEach((option) => {
      expect(screen.getByText(option.toString())).toBeInTheDocument();
    });
  });

  it('calls register function with correct arguments', () => {
    const id = 'sampleNo'; // sample id
    render(<SensorySelector id={id} options={options} register={mockRegister} />);


    // Check if register function is called with correct arguments
    expect(mockRegister).toHaveBeenCalledWith(id, { required: true });
  });
});
