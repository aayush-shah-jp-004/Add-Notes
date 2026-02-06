import React from 'react'
import MainWrite from './MainWrite'

const Heading = ({heads, setHeadfn}) => {

  return (
    <div className='flex flex-col gap-10'>

        <input 
            className='font-bold p-5 text-2xl border-0 active:scale-95 focus:outline-none'
            type="text" 
            value ={heads}
            onChange={(dets) =>{
                setHeadfn(dets.target.value);
            }}
            placeholder='Notes Heading...' 
            style={{
            width: "600px",
            height : "65px", 
            background : "#e0e0e0",
            borderRadius: "25px",
            boxShadow : "20px 20px 30px #c6ddc9, inset -20px -20px 30px #f5fff6",
        }} />

      </div>
  ) 
}

export default Heading
