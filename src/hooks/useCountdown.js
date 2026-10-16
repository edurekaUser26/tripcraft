import { useEffect, useState } from 'react'

function getMsLeft(targetDate) {
  return Math.max(0, new Date(targetDate).getTime() - Date.now())
}

export function useCountdown(targetDate) {
 const [msLeft, setMsLeft] = useState(() => getMsLeft(targetDate))

  useEffect(() => {
  const intervalId = setInterval(() => {
    setMsLeft(getMsLeft(targetDate))
  }, 1000)

  return () => clearInterval(intervalId)
}, [targetDate])

  return msLeft
}