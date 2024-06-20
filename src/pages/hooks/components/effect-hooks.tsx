import { useEffect, useState } from 'react'

const EffectHooks: React.FC = () => {
  const [count, setCount] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch('/zlkdatasys/data_zlk_xpflby.json')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('🍍🙏🍍👉: data', data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      console.log('🍍🙏🍍👉: finally')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>Effect Hooks</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default EffectHooks
