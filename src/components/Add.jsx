import React from 'react'

const Add = () => {
  return (
    <div className="w-full flex justify-center">
      <button
        className="font-semibold text-white px-10 py-4 rounded-full active:scale-95 transition-all
                   w-full max-w-xl"
        style={{
          background: "#4f8df7",
          boxShadow: "8px 8px 20px #c6ddc9, inset -8px -8px 20px #f5fff6",
        }}
      >
        ADD NOTES
      </button>
    </div>
  )
}

export default Add
