import { CoeFormData } from '@/src/commons/types/type';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface SensorySelectorProps {
    id: "sampleNo" | "roastLevel" | "dryAroma" | "crustAroma" | "breakAroma" | "cleanCup" | "sweet" | "acidity" | "mouthfeel" | "flavor";
    options: number[];
    register: UseFormRegister<CoeFormData>;
}

export default function SensorySelector({ id, options, register }: SensorySelectorProps) {
  return (
    <div className="flex flex-col">
      <select
        id={id}
        {...register(id, { required: true })} // 修正点: フィールドの名前を指定する
        className="form-select px-4 py-2 border rounded-md"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}