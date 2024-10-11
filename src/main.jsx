import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Component/HeaderSection'
import Hero from './Component/HeroSection'
import Product from './Component/ProductSection'
import Menu from './Component/MenuSection'
import Contact from './Component/ContactSection'
import Shef from './Component/ShefSection'
import Form from './Component/FromSection'
import Testimonials from './Component/Testimonials'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header/>
      <Hero/>
      <Product/>
      <Menu/>
      <Contact/>
      <Shef/>
      <Form/>
      <Testimonials/>
    </>
  </StrictMode>,
)
