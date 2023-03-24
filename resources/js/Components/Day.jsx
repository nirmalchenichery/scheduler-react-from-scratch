import dayjs from 'dayjs'
import React from 'react'

export default function Day(props) {

    // console.log(dayjs().format("DD-MM-YY")); current date

  const getCurrentDayClass = () =>{
    return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";

  }

//   function getCurrentDayClass() {
   
//   }


  return (
    <div className='border border-gray-200 flex flex-col'>
        <header className='flex flex-col items-center'>
             {/* {
                props.rowIndex === 0 && (<p className="text-sm mt-1">{props.day.format('ddd').toUpperCase()}</p>)
             }    */}

            <p className="text-sm mt-1">{props.day.format('ddd').toUpperCase()}</p>
            
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                {props.day.format('DD')}
            </p>
        </header>
    
    </div>
  )
}
