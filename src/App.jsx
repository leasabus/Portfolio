import React from 'react'
import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';
import { ProyectsSection } from './components/ProyectsSection';
import { TecnologiesSection } from './components/TecnologiesSection';


export const App = () => {
  return (
    <>
      <Header></Header>

      <ProyectsSection></ProyectsSection>

      <TecnologiesSection />

      <ContactSection />

    </>

  )
}

export default App;