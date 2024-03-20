import { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-screen flex flex-col justify-center items-center'>
        <div className='border-[1px] border-black rounded-xl shadow-md p-8'>
        <h1 className='text-4xl'>Hello World!</h1>
        <h2 className='text-3xl'>You clicked {count} times</h2>
        <MyButton className='w-full mt-6 py-2 px-6 bg-emerald-300 hover:bg-emerald-200 text-white rounded-md shadow-md' onClick={() => setCount(count + 1)} label='Increment'/>
        </div>
      </main>
    </>
  )
}

export default App
