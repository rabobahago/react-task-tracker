import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      remainder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      remainder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      remainder: false,
    },
  ])
  const deleteTask = (id) => {
    const remainTask = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(remainTask)
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        'No task to be deleted'
      )}
    </div>
  )
}

export default App
