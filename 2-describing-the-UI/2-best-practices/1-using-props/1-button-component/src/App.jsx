import { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Hello World!</h1>
        <h2>You clicked {count} times</h2>
        <MyButton className='py-2 px-6 bg-emerald-300 text-white rounded-md shadow-md' onClick={() => setCount(count + 1)} label='Increment'/>
      </main>
    </>
  )
}

export default App
