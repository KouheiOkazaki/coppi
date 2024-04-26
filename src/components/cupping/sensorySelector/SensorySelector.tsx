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

	return (
		<div className="flex flex-col">
			<input
				type="range"
				id={id}
				{...register(id, { required: true })}
				className="form-range"
				min={scoreOptions[0]} // 最小値をscoreOptionsの最初の値に設定
				max={scoreOptions[scoreOptions.length - 1]} // 最大値をscoreOptionsの最後の値に設定
				step="0.5" // ステップを適切な値に設定
				list="tickmarks" // スライダーの値のリストを使用する
				value={selectedValue} // 選択された値を表示
				onChange={handleChange} // 値が変更された時の処理
			/>
			<datalist id="tickmarks">
				{' '}
				{/* リストを作成 */}
				{scoreOptions.map((option) => (
					<option key={option} value={option} />
				))}
			</datalist>
		</div>
	)
}
