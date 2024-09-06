import './App.css'
import { useState } from 'react'
import Button from './components/button/button'
import Display from './components/display/display'

function App() {
  const [resultat, setResultat] = useState("0")
  const [valeur, setValeur] = useState(0)
  const [operation, setOperation] = useState("")

  const recuperer = () => {
    setValeur(parseInt(resultat))
    setResultat("0")
  }

  const reset = () => {
    setOperation("")
    setResultat("0")
    setValeur(0)
  }

  const aritmetique = (resultat: string, valeur: number, operation: string) => {
    if (operation == "+") {
      return () => setResultat((valeur+parseInt(resultat)).toString())
    }
    if (operation == "-") {
      return () => setResultat((valeur-parseInt(resultat)).toString())
    }
    if (operation == "*") {
      return () => setResultat(( valeur*parseInt(resultat)).toString())
    }
    if (operation == "/") {
      return () => setResultat((valeur/parseInt(resultat)).toString())
    }
  }

  return (
    <div className="calculatrice">
      <h1>Calculatrice</h1>
      <Display>{resultat}</Display>

      <div className="grille-principale">
        <div className="grille-numerique">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
            <Button key={num} onclick={() => setResultat(resultat + num.toString())}>
              {num}
            </Button>
          ))}
          <Button className="bouton-egal" onclick={aritmetique(resultat, valeur, operation)}>=</Button>
        </div>
        <div className="grille-operations">
          <Button onclick={reset}>C</Button>
          {['+', '-', '*', '/'].map((op) => (
            <Button key={op} onclick={() => { recuperer(); setOperation(op) }}>{op}</Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
