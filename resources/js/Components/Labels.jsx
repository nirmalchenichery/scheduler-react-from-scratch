import GlobalContext from '@/Pages/context/GobalContext'
import React, { Fragment, useContext } from 'react'

export default function Labels() {
    const {labels,updateLabel} = useContext(GlobalContext);
  return (
   
    <Fragment>
        <p className='text-gray-500 font-bold mt-10'>
            {labels.map(({label : lbl, checked},index)=>(
                <label key={index} className='items-center mt-3 block'>
                    <input 
                        type="checkbox" 
                        checked={checked} 
                        onChange={()=> updateLabel({label : lbl, checked: !checked})}
                        className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`} />
                    
                    <span className="ml-2 text-gray-700 capitalize">{lbl}</span>

                </label>

            ))}
        </p>
    </Fragment>
  )
}
