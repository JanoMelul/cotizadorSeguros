import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)
  const [resultado, setResultado] = useState(0)

  const [ datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })


  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }
  
  const cotizarSeguro = () => {
    let resultado = 2000

    const diferenciaYear = obtenerDiferenciaYear(datos.year)

    resultado -= ((diferenciaYear * 3) * resultado) / 100

    resultado *= calcularMarca(datos.marca)

    resultado *= calcularPlan(datos.plan)

    resultado = formatearDinero(resultado)

    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 3000);
  }

  return(
    <CotizadorContext.Provider
    value={{
      datos,
      handleChangeDatos,
      error,
      setError,
      cotizarSeguro,
      resultado,
      cargando
    }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext