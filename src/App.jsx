import { CotizadorProvider } from "./context/CotizadorProvider"
import AppSeguro from "./components/AppSeguro"


function App() {
  


  return (
    <CotizadorProvider
      value={{

      }}
    >
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
