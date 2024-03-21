import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center'>
        <div>
          <Form />
        </div>
      </main>
    </>
  )
}

export default App
