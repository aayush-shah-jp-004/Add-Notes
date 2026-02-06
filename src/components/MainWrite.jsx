import React from 'react'

const MainWrite = ({notes, notefn}) => {
  return (
    <div >
      <textarea
            className='p-5 text-xl border-0 active:scale-95 focus:outline-none'
            type="text" 
            value={notes}

            onChange={(dets)=>{
              notefn(dets.target.value);
            }}

            placeholder='Write Your Notes here...' 
            style={{
            width: "600px",
            height : "300px",
            background : "#e0e0e0",
            borderRadius: "25px",
            boxShadow : "20px 20px 60px #c6ddc9, inset -20px -20px 60px #f5fff6",
        }} />
    </div>
  )
}

export default MainWrite 
 