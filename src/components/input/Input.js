import React from 'react'
import "./style.css"

const setState=()=>{

}
const Input = ({label,state,setState,placeholder,type}) => {
  return (
    <div className='input-wrapper'>
        <p className='label-input'>{label}</p>
        <input value={state} onChange={(e)=>setState(e.target.value)} type={type} 
        placeholder={placeholder}
        className='custom-input'/>

    </div>
  )
}

export default Input