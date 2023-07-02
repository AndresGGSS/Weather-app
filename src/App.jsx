import React from 'react'
import AppClima from './Components/AppClima'
import { ClimaProvider } from './Context/ClimaProvider'

export default function App() {
  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  )
}
