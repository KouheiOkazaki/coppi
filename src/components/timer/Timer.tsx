'use client'
import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined // timerの型をNodeJS.Timeoutに変更

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      if (timer) clearInterval(timer) // timerが存在する場合のみclearIntervalを実行
    }

    return () => {
      if (timer) clearInterval(timer) // timerが存在する場合のみclearIntervalを実行
    }
  }, [isRunning])

  const handleStartStop = () => {
    setIsRunning((prev) => !prev)
  }

  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mb-4">Timer</h1>
      <div className="text-5xl font-bold mb-4">
        {Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}
        :{(time % 60).toString().padStart(2, '0')}
      </div>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md mr-4 hover:bg-blue-600"
          onClick={handleStartStop}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
