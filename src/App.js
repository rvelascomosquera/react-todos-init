
import { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Tarea from './Components/Tarea';


function App() {

  const [listTask, setListTask] = useState([])

  const newTask = (task) => {
    setListTask([task, ...listTask])
  }

  const deleteTask = (id) => {
    const filterTask = listTask.filter((e, index) => index !== id)
    setListTask(filterTask);
  }

  return (
    <>
    <div className="container">
    <div className="App">
        <h1>Mis Tareas Pendientes</h1>
        <Formulario
          newTask = {newTask}
        />
      </div>
      <div className='list'>
        {
         listTask.map((e, index) => <Tarea key={index} task={e} remove={deleteTask} id={index} />)
        }
      </div>
    </div>
    </>
    
  );
}

export default App;
