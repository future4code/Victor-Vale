import React from 'react'
import Form from './PublicArea/Form'
import HomePage from './PublicArea/HomePage'
import Travels from './PublicArea/Travels'
import Admin from './Admin/Admin'
import LoginPage from './Admin/LoginPage'
import TripDetailPage from './Admin/TripDetailPage'
import CreateTripPage from './Admin/CreateTripPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <HomePage/>
        </Route>

        <Route exact path={'/travels'}>
          <Travels/>  
        </Route>

        <Route exact path={'/form/:id'}>
          <Form/>
        </Route>

        <Route exact path={'/login'}>
          <LoginPage/>
        </Route>

        <Route exact path={'/admin/trips/list'}>
          <Admin/>
        </Route>    

        <Route exact path={'/admin/trips/:id'}>
          <TripDetailPage/>
        </Route>

        <Route exact path={'/admin/create'}>
          <CreateTripPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
export default App

// Esse é o arquivo de cópia
