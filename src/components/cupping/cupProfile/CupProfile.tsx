import React, { useState } from 'react';

export default function MultiSelector() {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([])
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const options: string[] = [
		'Clean',
		'Clear',
		'Super Clean',
		'Transparent',
		'Refine',
		'Definition',
		'Unclean',
		'Rough',
		'Dusty',
		'Dirty',
		'Faded',
		'Woody',
		'Verde',
		'Grassy',
		'Strawy',
		'Astringent',
		'Ashy',
		'Moldy',
		'Phenol',
		'Earthy',
		'Baggy',
		'Fermented',
	]

	const toggleOption = (option: string) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(
				selectedOptions.filter((item) => item !== option),
			)
		} else {
			setSelectedOptions([...selectedOptions, option])
		}
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="relative">
			<div
				className="p-3 border border-gray-300 rounded-md flex items-center justify-between cursor-pointer"
				onClick={toggleMenu}
			>
				<span className="flex-grow">
					{selectedOptions.length === 0
						? 'Select options'
						: selectedOptions.join(', ')}
				</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			{isOpen && (
				<div className="absolute top-full left-0 z-10 mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-md">
					{options.map((option) => (
						<div
							key={option}
							className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
								selectedOptions.includes(option)
									? 'bg-gray-100'
									: ''
							}`}
							onClick={() => toggleOption(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
