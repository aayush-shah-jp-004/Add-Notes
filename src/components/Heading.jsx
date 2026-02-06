import React from 'react'

const Heading = ({ heads, setHeadfn }) => {
  return (
    <input
      className="font-bold p-5 text-xl md:text-2xl border-0 focus:outline-none
                 w-full max-w-xl"
      type="text"
      value={heads}
      onChange={(e) => setHeadfn(e.target.value)}
      placeholder="Notes Heading..."
      style={{
        height: "65px",
        background: "#e0e0e0",
        borderRadius: "25px",
        boxShadow: "20px 20px 30px #c6ddc9, inset -20px -20px 30px #f5fff6",
      }}
    />
  )
}

export default Heading
