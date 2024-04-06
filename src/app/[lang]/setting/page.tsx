'use client'
import TabNavigation from '@/src/components/common/navigation/Navigation'
import React, { useState, ChangeEvent } from 'react'

const SettingsPage = () => {
  const [cuppingForm, setCuppingForm] = useState('COE') // Default to COE Cupping Form

  const handleFormChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedForm = e.target.value
    setCuppingForm(selectedForm)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>
        <div className="mb-6">
          <label
            htmlFor="cuppingForm"
            className="block text-lg font-medium mb-2"
          >
            Select Cupping Form:
          </label>
          <select
            id="cuppingForm"
            value={cuppingForm}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="COE">COE Cupping Form</option>
            <option value="SCA">SCA Cupping Form</option>
          </select>
        </div>
        <p className="text-lg text-center">
          You selected: {cuppingForm} Cupping Form
        </p>
      </div>
      <TabNavigation />
    </div>
  )
}

export default SettingsPage
