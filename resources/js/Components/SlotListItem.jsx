import React from 'react'

export default function SlotListItem(props) {
  return (
    <div className='grid '>
       <div className="border px-4 py-2" onClick={()=>props.setSeletedDate(props.slot)}>{props.slot}</div>
    </div>
  )
}
