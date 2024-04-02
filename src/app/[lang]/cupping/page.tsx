'use client'
import TabNavigation from '@/src/components/common/navigation/Navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  sampleNo: string
  roastLevel: string
  aroma: number
  defects: number
  cleanCup: number
  sweet: number
  acidity: number
  mouthfeel: number
  flavor: number
  aftertaste: number
  balance: number
  overall: number
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
          <label htmlFor="cleanCup" className="block mb-2 font-medium">
            Clean Cup
          </label>
          <select
            {...register('cleanCup', { required: true })}
            className="form-select px-4 py-2 border rounded-md"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="sweet" className="block mb-2 font-medium">
            Sweet
          </label>
          <select
            {...register('sweet', { required: true })}
            className="form-select px-4 py-2 border rounded-md"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="acidity" className="block mb-2 font-medium">
            Acidity
          </label>
          <select
            {...register('acidity', { required: true })}
            className="form-select px-4 py-2 border rounded-md"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="mouthfeel" className="block mb-2 font-medium">
            Mouthfeel
          </label>
          <select
            {...register('mouthfeel', { required: true })}
            className="form-select px-4 py-2 border rounded-md"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="flavor" className="block mb-2 font-medium">
            Fravor
          </label>
          <select
            {...register('flavor', { required: true })}
            className="form-select px-4 py-2 border rounded-md"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
          </select>
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
