'use client'
import React from 'react'
import TabNavigation from '@/src/components/common/navigation/Navigation'
import { useForm } from 'react-hook-form'
import { CoeFormData } from '@/src/commons/types/type'
import Timer from '../timer/Timer'
import { postFormAction } from './actions'

const scoreOptions = [0, 2, 4, 5, 6, 6.5, 7, 7.5, 8]

const CoeCuppingForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<CoeFormData>()


  return (
    <>
      <Timer />
      <form
        action={postFormAction}
        className="space-y-4 p-4 max-w-xl mx-auto bg-white rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Cupping Form</h2>
        <div className="flex flex-col">
          <label htmlFor="sampleNo" className="block mb-2 font-medium">
            Sample No:
          </label>
          <input
            id="sampleNo"
            {...register('sampleNo', { required: true })}
            className="form-input px-4 py-2 border rounded-md"
          />
          {errors.sampleNo && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {['cleanCup', 'sweet', 'acidity', 'mouthfeel', 'flavor'].map(fieldName => (
          <div className="flex flex-col" key={fieldName}>
            <label htmlFor={fieldName} className="block mb-2 font-medium">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            </label>
            <select
              id={fieldName}
              {...register(fieldName as keyof CoeFormData, { required: true })}
              className="form-select px-4 py-2 border rounded-md"
            >
              {scoreOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
      <TabNavigation />
    </>
  );
};

export default CoeCuppingForm;