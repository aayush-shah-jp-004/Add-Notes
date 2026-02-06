import React, { useState } from 'react'
import Heading from './components/Heading'
import MainWrite from './components/MainWrite'
import Add from './components/Add'
import Card from './components/Card'

const App = () => {

  const [heading, setheading] = useState('')
  const [notes, setNotes] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (dets)=>{
    dets.preventDefault();

    const copyTask = [...task];
    copyTask.push({heading,notes});
 
    setTask(copyTask);

    setheading('');
    setNotes('');
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);

    setTask(copyTask);
  }

  return (
    
   <div className='h-screen lg:w-full flex' >
    <div className='h-screen lg:w-1/2 flex justify-center items-center flex-col bg-green-100 gap-12'>

    <h1 className='text-6xl font-bold'>Your Daily Task</h1>

      <form
        onSubmit={function(dets){
          submitHandler(dets);
        }}
        className='flex flex-col gap-10'>
        <Heading heads={heading} setHeadfn = {setheading} />
        <MainWrite notes={notes} notefn = {setNotes} />
        <Add />
      </form>

    </div>

     <div className="h-screen lg:w-1/2 flex gap-6 p-8 bg-green-300">
        {task.map((item, idx) => (
        <Card
          key={idx}
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