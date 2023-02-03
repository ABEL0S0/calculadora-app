import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';

function App() {
  const[valor, setValor]=useState("");
  const hacerClic = (texto) => {
    console.log(texto);
    setValor(valor+texto);
  }
  const calcularClic=()=>{
    console.log("la operacion a calcular es: ",valor)
    let resultado = evaluate(valor);
    setValor(resultado);
    console.log("La respuesta de la operacion es: ",resultado);
  }
  return (
    <div className="App App-header">
      <h1 className='texto container'>Calculadora</h1>
      <div>
        <input type="text" value={valor} readOnly/>
      </div>
      <div>
        <Boton hacerClic={hacerClic} >1</Boton>
        <Boton hacerClic={hacerClic}>2</Boton>
        <Boton hacerClic={hacerClic}>3</Boton>
        <Boton hacerClic={hacerClic}>+</Boton>
      </div>
      <div>
        <Boton hacerClic={hacerClic}>4</Boton>
        <Boton hacerClic={hacerClic}>5</Boton>
        <Boton hacerClic={hacerClic}>6</Boton>
        <Boton hacerClic={hacerClic}>-</Boton>
      </div>
      <div>
        <Boton hacerClic={hacerClic}>7</Boton>
        <Boton hacerClic={hacerClic}>8</Boton>
        <Boton hacerClic={hacerClic}>9</Boton>
        <Boton hacerClic={hacerClic}>*</Boton>
      </div>
      <div>
        <Boton hacerClic={hacerClic}>.</Boton>
        <Boton hacerClic={hacerClic}>0</Boton>
        <Boton hacerClic={calcularClic}>=</Boton>
        <Boton hacerClic={hacerClic}>/</Boton>
      </div>
      <div>
        <button className='boton-operacion' onClick={() => setValor("")}>CLEAR</button>
      </div>
    </div>
  );
}

export default App;
