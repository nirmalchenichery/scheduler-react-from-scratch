import React, { Fragment} from 'react'
import Day from './Day'
export default function Month(props) {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
       {props.month.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          {row.map((day, index) => (
            <Day day={day} key={index} rowIndex={rowIndex} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}
