import { useState } from 'react'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center'>
        <Gallery/>
      </main>
    </>
  )
}

export default App
