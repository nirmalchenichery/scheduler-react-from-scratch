import GlobalContext from '@/Pages/context/GobalContext';
import dayjs from 'dayjs'
import { get } from 'lodash';
import React, { useContext, useEffect, useState } from 'react'

export default function Day(props) {

  const [dayEvents,setDayEvents] = useState([]);

  const { 
          setDaySelected,
          setShowEventModal,
          filteredEvents,// savedEvents,
          setSelectedEvent,
          holiday
        } = useContext(GlobalContext);
  
  useEffect(()=>{
    const events = filteredEvents.filter(
      evt => dayjs(evt.day).format("DD-MM-YY") === props.day.format("DD-MM-YY"))
      setDayEvents(events)
  },[filteredEvents,props.day]);

  const getCurrentDayClass = () =>{
    return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  const getHolidayClass = () =>{
    return holiday.includes(props.day.format("YYYY-MM-DD")) ? "bg-red-600" : "";
  }

  return (
    <div className={`border border-gray-200 flex flex-col ${getHolidayClass()}`}>
        <header className='flex flex-col items-center'>
             {/* {
                props.rowIndex === 0 && (<p className="text-sm mt-1">{props.day.format('ddd').toUpperCase()}</p>)
             }    */}

            <p className="text-sm mt-1">{props.day.format('ddd').toUpperCase()}</p>
            
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                {props.day.format('DD')}
            </p>
        </header>
        <div className='flex-1 cursor-pointer' 
              onClick={()=>{
                setDaySelected(props.day)
                holiday.includes(props.day.format("YYYY-MM-DD")) ? "" : setShowEventModal(true)
            }}
        >
            
          {dayEvents.map((evt,index)=>(
              <div key={index} 
                onClick={()=>setSelectedEvent(evt)}
                className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
              >
              {evt.title}
              </div>
          ))}
        </div>
    
    </div>
  )
}