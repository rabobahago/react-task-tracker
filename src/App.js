import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
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
  const addTask = (task) => {
    let id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    const remainTask = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(remainTask)
  }
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task
      }),
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No task to be deleted'
      )}
    </div>
  )
}

export default App
