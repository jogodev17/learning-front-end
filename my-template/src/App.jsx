import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Hello World!</h1>
        <h2>You clicked {count} times</h2>
        <button className='py-2 px-6 bg-emerald-300 text-white rounded-md shadow-md' onClick={() => setCount(count + 1)}>Click me!</button>
      </main>
    </>
  )
}

export default App
