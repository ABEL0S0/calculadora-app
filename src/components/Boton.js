import React from 'react'

export default function Boton(props) {
  return (
    <button className='boton-normal' onClick={()=>props.hacerClic(props.children)}>{props.children}</button>
  )
}
