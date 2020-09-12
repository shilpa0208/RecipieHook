import React from 'react'
import '../generated/tailwind.css'
import Header from './Header'
import Recipes from './Recipe/Recipes'
import AddRecipe from './Admin/AddRecipe'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Header title='Recipe Hook'/>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Recipes}/>
          <Route path='/admin' component={AddRecipe} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
