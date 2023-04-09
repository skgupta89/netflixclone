import React from 'react'
const Translation = ({doStuff, setInput}) => {
  return (
    <div className='textContainer d-flex flex-column align-items-center'>
<textarea className='text-area form-control bg-dark text-white'
 cols={20} 
 rows={10}
 onChange={(e)=>setInput(e.target.value)}
 ></textarea>
<button className='btn btn-info btn-lg action-btn btn-outline' onClick={doStuff}>Search</button>
    </div>
  )
}

export default Translation