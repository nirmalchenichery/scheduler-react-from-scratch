import React from 'react'
import moment from 'moment';

export default function SlotListItem(props) {

  return (
    <div className='grid '>
       <div className="border px-4 py-2" 
            onClick={()=> {
                  props.setSeletedDate( (new moment(props.selectedDay).format('YYYY-MM-DD')) + " - " + props.slot )
                  props.setShowCalender(false)
              }}
        >{props.slot}</div>
    </div>
  )
}
