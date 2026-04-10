import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Card from './components/card/card'
const App = () => {
  return (
    <div>
      <Header />
      <About />

      <Main />
      <Card />

    </div>
  )
}

export default App