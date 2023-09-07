import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const greeting="Es usted BIENVENIDO"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
