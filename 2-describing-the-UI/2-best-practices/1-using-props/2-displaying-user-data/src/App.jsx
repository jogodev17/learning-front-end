import { useState } from 'react'
import UserProfile from './components/UserProfile'

function App() {
  // dummy data, it's like when someone logged in then this state is the current user
  const user = {
    profilePicture: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/432734690_122126713628205973_601674263943866885_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XYO88lBa6CkAX8nhLQt&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDNThHzJPXZ0MZYHy3-ieGFzLNVm2Vrq-Aq7A8d0ifawg&oe=66002BA6',
    name: 'Joshua Gonzales',
    bio: 'I am Coding Software',
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=61556179213130',
    }
  }

  return (
    <>
      <main className='flex flex-col justify-center items-center'>
        <div>
          <h1 className='mb-6 text-4xl'>Using User Profile Component</h1>
          <UserProfile user={user} social={user.social}/>
        </div>
      </main>
    </>
  )
}

export default App
