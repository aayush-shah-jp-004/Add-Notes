import React from 'react'

const Card = ({ heading, notes, idx, deleteNote }) => {
  return (
    <div
      className="h-80 w-full sm:w-72 md:w-80 relative flex flex-col justify-between p-6
                 bg-cover rounded-2xl cursor-pointer"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/78/30/04/78300461e52688c0e1d21be6840374bd.jpg')",
      }}
      onClick={() => deleteNote(idx)}
    >
      <div>
        <h3 className="text-lg font-bold underline">{heading}</h3>
        <p className="mt-3 text-sm">{notes}</p>
      </div>

      <button className="self-center bg-red-500 h-8 w-32 rounded-full font-bold text-white active:scale-95">
        DELETE
      </button>
    </div>
  )
}

export default Card
