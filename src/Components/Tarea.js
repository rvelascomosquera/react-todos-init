import React from 'react'


const Tarea = (props) => {

  const removeTask = () => {
  props.remove(props.id)
  }

  return (
    <>
    <div className='task'>
      <span>{props.task}</span> 
      <span className='delete' onClick={removeTask} > X </span>      
    </div>
    </>
    
  )
}

export default Tarea