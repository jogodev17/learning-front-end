import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center'>
        <Counter />
      </main>
    </>
  )
}

export default App
