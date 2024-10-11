import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Component/HeaderSection'
import Hero from './Component/HeroSection'
import Product from './Component/ProductSection'
import Menu from './Component/MenuSection'
import Contact from './Component/ContactSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header/>
      <Hero/>
      <Product/>
      <Menu/>
      <Contact/>
    </>
  </StrictMode>,
)
