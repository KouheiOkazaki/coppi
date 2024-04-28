import React, { useState } from 'react';

export default function CupProfile() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // 選択されたオプションの配列は文字列の配列として定義

  // マルチセレクタのオプションを定義
  const options: string[] = [
    'Clean', 'Clear', 'Super Clean', 'Transparent', 'Refine', 'Definition',
    'Unclean', 'Rough', 'Dusty', 'Dirty', 'Faded', 'Woody', 'Verde', 'Grassy', 'Strawy', 'Astringent', 'Ashy', 'Moldy', 'Phenol', 'Earthy', 'Baggy', 'Fermented'
  ];

  const handleOptionToggle = (option: string) => { // option パラメーターの型を string に指定
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionToggle(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <div>Selected Options: {selectedOptions.join(', ')}</div>
    </div>
  );
}
