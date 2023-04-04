import GlobalContext from '@/Pages/context/GobalContext'
import React, { useContext } from 'react'

export default function CreateEventButton() {

  const {setShowEventModel} = useContext(GlobalContext);

  return (
    <div>
        <button onClick={()=>{setShowEventModel(true)}}
            className='border p-2 font-bold rounded-full flex items-center shadow-md hover:shadow-2xl'>
             + Add
        </button>
    </div>
  )
}
