import React, { useState } from 'react'
import { scoreOptions } from '@/src/commons/const/const'
import { SensorySelectorProps } from '@/src/commons/types/type'

export default function SensorySlider({ id, register }: SensorySelectorProps) {
	const [selectedValue, setSelectedValue] = useState(scoreOptions[0])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(event.target.value)
		if (![0.5, 1.5, 2.5, 3.5, 4.5, 5.5].includes(newValue)) {
			setSelectedValue(newValue)
		}
	}

	// 値に基づいてdiv要素のスタイルを動的に変更する
	const divStyle = {
		marginLeft: `${selectedValue! * 12}%`, // サムの値に応じて左マージンを調整する
		transition: 'margin-left 0.2s ease', // マージンの変化を滑らかにする
	}

	return (
		<div className="flex flex-col">
			<div style={divStyle}>{selectedValue}</div>
			<input
				type="range"
				id={id}
				{...register(id, { required: true })}
				className="form-range"
				min={scoreOptions[0]}
				max={scoreOptions[scoreOptions.length - 1]}
				step="0.5"
				list="tickmarks"
				value={selectedValue}
				onChange={handleChange}
			/>
			<datalist id="tickmarks">
				{scoreOptions.map((option) => (
					<option key={option} value={option} />
				))}
			</datalist>
		</div>
	)
}
