import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import Page from './components/Page'

function App() {
  

  return (
    <UserContextProvider>
      <h1>
        React with shekhar
      </h1>
      <SignUp/>
      <Page/>
    </UserContextProvider>
  )
}

export default App
