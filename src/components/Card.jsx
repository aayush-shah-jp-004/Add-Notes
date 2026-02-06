import React from 'react'

const Card = ({ heading, notes, idx, deleteNote}) => {
  return (
    <div 
    className="h-96 w-96 relative flex flex-col justify-between p-6 bg-cover rounded-2xl bg-[url('https://i.pinimg.com/1200x/78/30/04/78300461e52688c0e1d21be6840374bd.jpg')]"
    
    onClick={()=>{
      deleteNote(idx);
    }}> 
      <div>
        <h3 className="text-xl font-bold underline">{heading}</h3>
        <p className='mt-3 p-2'>{notes}</p>
      </div>

      <button className="self-center bg-red-500 h-8 w-40 rounded-full font-bold text-amber-50 active:scale-95">
        DELETE
      </button>

    </div>
  )
}

export default Card
  