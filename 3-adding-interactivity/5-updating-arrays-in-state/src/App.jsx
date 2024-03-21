import { useState } from 'react'
import BucketList from './components/BucketList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <BucketList/>
      </main>
    </>
  )
}

export default App
