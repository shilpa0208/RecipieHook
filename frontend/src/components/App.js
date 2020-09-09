import React from 'react'
import '../generated/tailwind.css'
import Header from './Header'
import Recipes from './Recipe/Recipes'


function App() {
  return (
    <div>
      <Header title='Recipe Hook'/>
      <Recipes />
    </div>
  )
}

export default App
