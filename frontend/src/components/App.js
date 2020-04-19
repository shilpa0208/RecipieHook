import React from 'react'
import '../generated/tailwind.css'
import Header from './Header'
import Recipe from './Recipe/Recipe'


function App() {
  return (
    <div>
      <Header title='Recipe Hook'/>
      <Recipe />
    </div>
  )
}

export default App
