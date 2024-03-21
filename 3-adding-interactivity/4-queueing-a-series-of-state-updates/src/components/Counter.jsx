import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [score, setScore] = useState(0);
  // if clicked on 2nd button it will be:
  // [3, 3, 3]
  const [updateQueue, setUpdateQueue] = useState([]);

  useEffect(() => {

    // [3, 3, 3];
    // each item will iterate through and plus it to the current score
    updateQueue.forEach(update => {
      setScore(prevScore => prevScore + update)
    })

    // resets the queue
    setUpdateQueue([]);
  }, [updateQueue])

  const queueUpdate = (amount) => {
    // add item to the queue
    setUpdateQueue((prevQueue) => ([
      ...prevQueue,
      amount
    ]))
  }

  return (
    <div className='w-[300px] flex flex-col justify-start items-start gap-4'>
      <h1 className='text-4xl font-semibold'>Score: {score}</h1>
      <button className='w-full py-2 px-6 bg-slate-500 hover:bg-slate-400 text-white rounded-md' type='button' onClick={() => queueUpdate(1)}>Increment +1</button>
      <button className='w-full py-2 px-6 bg-slate-500 hover:bg-slate-400 text-white rounded-md' type='button' onClick={() => {
        queueUpdate(3)
        queueUpdate(3)
        queueUpdate(3)
      }}>Increment +3</button>
    </div>
  )
}

export default Counter