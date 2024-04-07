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
  // roastLevel: string
  // aroma: number
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
