/*
  - On the homepage the user can enter the city of his/her choice
  - By clicking on the Submit button or ENTER it will show the weather for the next 5 days
  - Use the API https://unsplash.com/ to show the photo of the city they put in the form
  - The app must be responsive and mobile friendly
*/



import { useState } from 'react'
import Forms from "./components/Forms"
import "./sass/main.scss"

function App() {
  return (
    <>
    <section className='rounded-lg flex flex-col w-1/2 h-max p-6 bg-blue-500'>
    <header className=' text-white'>
      <h1 className='text-3xl text-transform: uppercase font-bold'>My Weather App</h1>
    </header>
    <main>
      <Forms />
    </main>
    </section>
    </>
  )
}

export default App
