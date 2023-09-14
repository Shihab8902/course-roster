import React from 'react'

import Header from './layouts/Header'
import Courses from './components/Courses'

const App = () => {
  return <>

    <header className='container mx-auto'>
      <Header />
    </header>

    <main className='container mx-auto'>
      <Courses />
    </main>

  </>
}

export default App