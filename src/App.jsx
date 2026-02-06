import React, { useState } from 'react'
import Heading from './components/Heading'
import MainWrite from './components/MainWrite'
import Add from './components/Add'
import Card from './components/Card'

const App = () => {
  const [heading, setheading] = useState('')
  const [notes, setNotes] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setTask([...task, { heading, notes }])
    setheading('')
    setNotes('')
  }

  const deleteNote = (idx) => {
    const copy = [...task]
    copy.splice(idx, 1)
    setTask(copy)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center
                      bg-green-100 gap-10 p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Your Daily Task
        </h1>

        <form onSubmit={submitHandler} className="w-full flex flex-col gap-8 items-center">
          <Heading heads={heading} setHeadfn={setheading} />
          <MainWrite notes={notes} notefn={setNotes} />
          <Add />
        </form>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 bg-green-300 p-6 flex flex-wrap gap-6 justify-center overflow-y-auto">
        {task.map((item, idx) => (
          <Card
            key={idx}
            idx={idx}
            heading={item.heading}
            notes={item.notes}
            deleteNote={deleteNote}
          />
        ))}
      </div>

    </div>
  )
}

export default App
