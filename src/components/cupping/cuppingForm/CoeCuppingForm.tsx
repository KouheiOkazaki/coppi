import React, { useState } from 'react'
import TabNavigation from '@/src/components/common/navigation/Navigation'
import { Controller, useForm } from 'react-hook-form'
import { CoeFormData } from '@/src/commons/types/type'
import { postFormAction } from './actions'
import {
	acidityOptions,
	aftertasteOptions,
	balanceOptions,
	cleanCupOptions,
	flavorOptions,
	mouthfeelOptions,
	overallOptions,
	roastOptions,
	sweetnessOptions,
} from '@/src/commons/const/const'
import Timer from '../../timer/Timer'
import SensorySelector from '../sensorySelector/SensorySelector'
import Select from 'react-select'

export default function CoeCuppingForm() {
	const {
		register,
		control,
		formState: { errors },
	} = useForm<CoeFormData>({
		defaultValues: {
			cleanCupProfiles: [],
		},
	})

	const [selectedRoastIndex, setSelectedRoastIndex] = useState<number>(0)
	const [dryAromaValue, setDryAromaValue] = useState<number>(1)
	const [crustAromaValue, setCrustAromaValue] = useState<number>(1)
	const [breakAromaValue, setBreakAromaValue] = useState<number>(1)

	return (
		<>
			<Timer />
			<form
				action={postFormAction}
				className="space-y-4 p-4 max-w-xl mx-auto bg-white rounded-lg shadow"
			>
				<h2 className="text-2xl font-bold mb-4">Cupping Form</h2>
				<div className="flex flex-col">
					<label
						htmlFor="sampleNo"
						className="block mb-2 font-medium"
					>
						Sample No:
					</label>
					<input
						id="sampleNo"
						{...register('sampleNo', { required: true })}
						className="form-input px-4 py-2 border rounded-md"
					/>
					{errors.sampleNo && (
						<span className="text-red-500 text-sm">
							This field is required
						</span>
					)}
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="roastLevel"
						className="block mb-2 font-medium"
					>
						Roast:
					</label>
					<div className="flex justify-between items-center">
						{roastOptions.map((option, index) => (
							<div
								key={option.level}
								className={`roast-option ${selectedRoastIndex === index ? 'selected' : ''}`}
								style={{ backgroundColor: option.color }}
								onClick={() => setSelectedRoastIndex(index)}
							></div>
						))}
					</div>
					<input
						type="hidden"
						id="roastLevel"
						{...register('roastLevel', { required: true })}
						value={roastOptions[selectedRoastIndex]?.level || ''}
					/>
					{errors.roastLevel && (
						<span className="text-red-500 text-sm">
							This field is required
						</span>
					)}
				</div>
				<div className="flex flex-col">
					<label className="block mb-2 font-medium">Aroma:</label>
					<div className="flex justify-between">
						<div className="mr-4">
							<label
								htmlFor="dryAroma"
								className="block mb-2 font-medium"
							>
								Dry Aroma:
							</label>
							<input
								type="range"
								id="dryAroma"
								{...register('dryAroma', { required: true })}
								min="1"
								max="3"
								value={dryAromaValue}
								onChange={(e) =>
									setDryAromaValue(parseInt(e.target.value))
								}
								className="appearance-none h-40 transform rotate-180"
								style={{ writingMode: 'vertical-rl' }}
							/>
							<div className="text-center">{dryAromaValue}</div>
						</div>
						<div className="mr-4">
							<label
								htmlFor="crustAroma"
								className="block mb-2 font-medium"
							>
								Crust Aroma:
							</label>
							<input
								type="range"
								id="crustAroma"
								{...register('crustAroma', { required: true })}
								min="1"
								max="3"
								value={crustAromaValue}
								onChange={(e) =>
									setCrustAromaValue(parseInt(e.target.value))
								}
								className="appearance-none h-40 transform rotate-180"
								style={{ writingMode: 'vertical-rl' }}
							/>
							<div className="text-center">{crustAromaValue}</div>
						</div>
						<div>
							<label
								htmlFor="breakAroma"
								className="block mb-2 font-medium"
							>
								Break Aroma:
							</label>
							<input
								type="range"
								id="breakAroma"
								{...register('breakAroma', { required: true })}
								min="1"
								max="3"
								value={breakAromaValue}
								onChange={(e) =>
									setBreakAromaValue(parseInt(e.target.value))
								}
								className="appearance-none h-40 transform rotate-180"
								style={{ writingMode: 'vertical-rl' }}
							/>
							<div className="text-center">{breakAromaValue}</div>
						</div>
					</div>
				</div>
				<label className="block mb-2 font-medium">CleanCup:</label>
				<SensorySelector id="cleanCup" register={register} />
				<Controller
					name="cleanCupProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={cleanCupOptions}
							value={cleanCupOptions.filter((option) =>
								field.value.includes(option.value),
							)}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>

				<label className="block mb-2 font-medium">Sweet:</label>
				<SensorySelector id="sweet" register={register} />
				<Controller
					name="sweetnessProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={sweetnessOptions}
							value={
								field.value
									? sweetnessOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>

				<label className="block mb-2 font-medium">Acidity:</label>
				<SensorySelector id="acidity" register={register} />
				<Controller
					name="acidityProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={acidityOptions}
							value={
								field.value
									? acidityOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>
				<label className="block mb-2 font-medium">Mouthfeel:</label>
				<SensorySelector id="mouthfeel" register={register} />
				<Controller
					name="mouthfeelProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={mouthfeelOptions}
							value={
								field.value
									? mouthfeelOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>
				<label className="block mb-2 font-medium">Flavor:</label>
				<SensorySelector id="flavor" register={register} />
				<Controller
					name="flavorProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={flavorOptions}
							value={
								field.value
									? flavorOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>
				<label className="block mb-2 font-medium">Aftertaste:</label>
				<SensorySelector id="aftertaste" register={register} />
				<Controller
					name="aftertasteProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={aftertasteOptions}
							value={
								field.value
									? aftertasteOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>
				<label className="block mb-2 font-medium">Balance:</label>
				<SensorySelector id="balance" register={register} />
				<Controller
					name="balanceProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={balanceOptions}
							value={
								field.value
									? balanceOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>
				<label className="block mb-2 font-medium">Overall:</label>
				<SensorySelector id="overall" register={register} />
				<Controller
					name="overallProfiles"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={overallOptions}
							value={
								field.value
									? overallOptions.filter((option) =>
											field.value.includes(option.value),
										)
									: []
							}
							onChange={(selectedOptions) => {
								const selectedValues = selectedOptions.map(
									(option) => option.value,
								)
								field.onChange(selectedValues)
							}}
							isMulti
							styles={{
								option: (provided, state) => ({
									...provided,
									color: state.data.color,
								}),
							}}
						/>
					)}
				/>
				<button
					type="submit"
					className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200"
				>
					Submit
				</button>
			</form>
			<TabNavigation />
			<style jsx>{`
				.roast-option {
					width: calc(100% / ${roastOptions.length});
					height: 40px;
					cursor: pointer;
					border: none;
					outline: none;
					transition: background-color 0.3s ease;
					font-size: 14px;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
				}
				.roast-option.selected {
					border: 2px solid #000;
				}
			`}</style>
		</>
	)
}
