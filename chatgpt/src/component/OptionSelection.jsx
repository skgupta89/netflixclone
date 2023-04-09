import React from 'react';
import { arrayItems } from '../AIOptions';


const OptionSelection = ({arrayItems, selectOption}) => {
  return (
    <>
    <h1 className='heading'>

    Reat AI APP
    </h1>

    <div className='grid-main' >
        {
            arrayItems.map((item,index)=>{
                return(
                    <div className='grid-child' onClick={()=>selectOption(item.option)}>
<h3>{item.name}</h3>
<p>{item.description}</p>


                    </div>
                )
            })
        }
    </div>
    
    </>
  )
}

export default OptionSelection