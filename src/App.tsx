import './App.css'
import HomePage from './components/HomePage'
import LoadingPage from './components/LoadingPage'
import React, { useState } from 'react'

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {!showHome ? (
        <LoadingPage onImageClick={() => setShowHome(true)} />
      ) : (
        <HomePage />
      )}
    </>
  )
}

export default App
