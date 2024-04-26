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
	sweet: number
	acidity: number
	mouthfeel: number
	flavor: number
	// aftertaste: number
	// balance: number
	// overall: number
}

export type SensorySelectorProps = {
	id: 'cleanCup' | 'sweet' | 'acidity' | 'mouthfeel' | 'flavor'
	// | 'afterTaste'
	// | 'balance'
	// | 'overall'
	register: UseFormRegister<CoeFormData>
}
