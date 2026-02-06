import React from 'react'

const MainWrite = ({ notes, notefn }) => {
  return (
    <textarea
      className="p-5 text-lg md:text-xl border-0 focus:outline-none
                 w-full max-w-xl"
      value={notes}
      onChange={(e) => notefn(e.target.value)}
      placeholder="Write Your Notes here..."
      style={{
        height: "280px",
        background: "#e0e0e0",
        borderRadius: "25px",
        boxShadow: "20px 20px 60px #c6ddc9, inset -20px -20px 60px #f5fff6",
      }}
    />
  )
}

export default MainWrite
