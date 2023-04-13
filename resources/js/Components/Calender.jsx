import React, { useState } from 'react'
import CalendarDays from './Days';
import { set } from 'lodash';

const Calender = () => {
   
  const holidayList = [ '2023-04-10', '2023-04-11', '2023-04-23', '2023-06-11'];
  
  // const slots = 
  // [
  //   {
  //   "2023-04-09": ['08:00 ~ 09:00','09:00 ~ 10:00','10:00 ~ 11:00','11:00 ~ 12:00'],
  //   "2023-04-12": ['13:00 ~ 14:00','15:00 ~ 16:00'],
  //   "2023-04-13": ['17:00 ~ 18:00','19:00 ~ 20:00','21:00 ~ 22:00'],
  //   }
  // ]


  const slots = [
    { date: "2023-04-09", slotes: ['08:00 ~ 09:00','09:00 ~ 10:00','10:00 ~ 11:00','11:00 ~ 12:00'] },
    { date: "2023-04-12", slotes: ['13:00 ~ 14:00','15:00 ~ 16:00'] },
    { date: "2023-04-13", slotes: ['17:00 ~ 18:00','19:00 ~ 20:00','21:00 ~ 22:00'] },
   
];




  

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];

  const  [currentDay,setCurrentDay ] =  useState(new Date());
  const  [showCalender,setShowCalender ] =  useState(false);
  const  [seletedDate,setSeletedDate ] =  useState("");

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

  const handleDate = ()=>{
    setShowCalender(true);
  }

  return (

      <>
      <div>

          <input 
            type="text" 
            value={seletedDate}
            onChange={(e)=>setSeletedDate(e.target.value)}
            onClick={handleDate}
          />

      </div>

      {
        showCalender &&
        <div className="calendar">
        
        <header className="calendar-header px-4 py-2 flex items-center">
          {/* <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calender </h1> */}
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
          <CalendarDays day={currentDay} 
                        changeCurrentDay={changeCurrentDay} 
                        setSeletedDate={setSeletedDate} 
                        setShowCalender={setShowCalender}
                        holiday={holidayList}
                        slots={slots}
          />
        </div>
        </div>
      }


      </>
  )
}
export default Calender;
