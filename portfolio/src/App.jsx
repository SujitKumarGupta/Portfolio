import { useContext, useState } from 'react'
import Intro from './components/intro/Intro.jsx'
// import About from './components/about/About'
// import ProductList from './components/productList/ProductList'
// import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'

function App() {
 const theme = useContext(ThemeContext)
 const darkMode= theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode? "#222": "white", color: darkMode && "white"}}>
     <Toggle/>
     <Intro/>
    </div>
  )
}

export default App
