import { UseFormRegister } from 'react-hook-form'

export type CuppingResult = {
	id: number
	date: string
	coffee: string
	score: number
}

export type Dictionary = {
	[key: string]: { [key: string]: string }
}

export type CoeFormData = {
	sampleNo: string
	roastLevel: string
	dryAroma: number
	crustAroma: number
	breakAroma: number
	// defects: number
	cleanCup: number
	cleanCupProfiles: string[]
	sweet: number
	sweetnessProfiles: string[]
	acidity: number
	acidityProfiles: string[]
	mouthfeel: number
	mouthfeelProfiles: string[]
	flavor: number
	flavorProfiles: string[]
	aftertaste: number
	aftertasteProfiles: string[]
	balance: number
	balanceProfiles: string[]
	overall: number
	overallProfiles: string[]
}

export type SensorySelectorProps = {
	id:
		| 'cleanCup'
		| 'sweet'
		| 'acidity'
		| 'mouthfeel'
		| 'flavor'
		| 'aftertaste'
		| 'balance'
		| 'overall'
	register: UseFormRegister<CoeFormData>
}
