'use client'
import TabNavigation from '@/src/components/common/navigation/Navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  sampleNo: string
  roastLevel: string
  fragranceAroma: number
  flavor: number
  aftertaste: number
  acidity: number
  body: number
  uniformity: number
  balance: number
  cleanCup: number
  sweetness: number
  overall: number
  defects: number
}

const CuppingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  //TODO ここをserver actionに置き換える
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 max-w-xl mx-auto bg-white rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Cupping Form</h2>
        <div className="flex flex-col">
          <label htmlFor="sampleNo" className="block mb-2 font-medium">
            Sample No:
          </label>
          <input
            {...register('sampleNo', { required: true })}
            className="form-input px-4 py-2 border rounded-md"
          />
          {errors.sampleNo && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="fragranceAroma" className="block mb-2 font-medium">
            Fragrance/Aroma:
          </label>
          <input
            type="number"
            {...register('fragranceAroma', { required: true, min: 6, max: 10 })}
            className="form-input px-4 py-2 border rounded-md"
          />
          {errors.fragranceAroma && (
            <span className="text-red-500 text-sm">
              Please enter a valid score between 6 and 10
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
      <TabNavigation />
    </>
  )
}

export default CuppingForm
