import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Component/HeaderSection'
import Hero from './Component/HeroSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header/>
      <Hero/>
    </>
  </StrictMode>,
)
