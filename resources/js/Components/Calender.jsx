import React, { useState } from 'react'
import CalendarDays from './Days';

const Calender = () => {
   
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];

  const  [currentDay,setCurrentDay ] =  useState(new Date());

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  }
  
  const handleNextMonth = () => {
      setCurrentDay( new Date(currentDay.setDate(currentDay.getDate() + 30)) );
  }

  const handlePrevMonth = () => {
      setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 30)));
  }

  const handleReset =() =>{
      setCurrentDay(new Date());
  }

  return (
      <div className="calendar">
        
        <header className="calendar-header px-4 py-2 flex items-center">
          <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calender </h1>
          <button className="border rounded py-2 px-4 mr-5" 
                  onClick={handleReset}
          > Today </button>

          <button 
                onClick={handlePrevMonth}
          >
              {/* material-icons-outlined */}
              <span className=" cursor-pointer text-gray-600 mx-2 font-bold border rounded py-2 px-4 mr-5">
                  {/* chevron_left */} Prevous
              </span>
          </button>

          <p className='header-year'>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</p>

          <button 
            onClick={handleNextMonth}
          >
            {/* material-icons-outlined */}
            <span className=" cursor-pointer text-gray-600 mx-2 font-bold border rounded py-2 px-4 mr-5">
                {/* chevron_right */}
                Next
            </span>
          </button>
      </header>
        <div className="calendar-body">
          <div className="table-header"></div>
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
  )
}
export default Calender;
