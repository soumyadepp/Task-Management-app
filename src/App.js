import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/task.js'
import AddTask from './components/AddTask'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
  ])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    console.log(data)
    return data
  }
  //add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }
  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log('toggled!')
  }
  return (
    <div className="body">

      <div className="topnav">
        <a href="#home">Home</a>

        <a href="#news" className="active">Schedule</a>
        <a href="#contact">Contact</a>

        <a href="#about">About</a>
      </div>
      <div className="heading"><center>THE BEST APP FOR TASK SCHEDULING.<br /> Happy scheduling!</center></div>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (
            'Your added Tasks will appear here'
          )}
      </div>
    </div >
  )
}

export default App
