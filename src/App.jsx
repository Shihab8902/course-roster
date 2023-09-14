import React from 'react'

import Header from './layouts/Header'
import Courses from './components/courses/Courses'
import Status from './components/status/Status'


const App = () => {
  return <>

    <header className='container mx-auto'>
      <Header />
    </header>

    <main className='container mx-auto flex flex-col-reverse lg:flex-row px-4 justify-between gap-6'>
      <Courses />
      <Status />
    </main>

  </>
}

export default App