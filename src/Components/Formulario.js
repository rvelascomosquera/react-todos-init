import React, { useState } from 'react'

const Formulario = (props)  => {

  const [inputText, setInputText] = useState("")
  
  const updateForm = (e) => {
    setInputText(e.target.value)
  }

  const submit = (event) => {
    event.preventDefault();
    props.newTask(inputText)
    setInputText("")
  }

  return (
    <div>
      <form className='form' onSubmit={submit}>
        <input value={inputText} onChange={updateForm} placeholder="Nueva tarea"/> 
        <button>Agregar</button>
      </form>
    </div>
  )
}

export default Formulario