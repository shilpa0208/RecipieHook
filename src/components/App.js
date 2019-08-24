import React from 'react'
import '../generated/tailwind.css'
import Header from './Header'
import Recipie from './Recipie/Recipie'


function App() {
  return (
    <div className=''>
      <Header title='Recipie Hook'/>
      <Recipie />
    </div>
  )
}

export default App
