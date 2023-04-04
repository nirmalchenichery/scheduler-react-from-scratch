import GlobalContext from '@/Pages/context/GobalContext';
import dayjs from 'dayjs'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { getMonth } from './UtilityFunction';

export default function SmallCalender() {

    const [currentMonthIndex,setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth,setCurrentMonth] = useState(getMonth())

    const {monthIndex,setSmallCalenderMonth,daySelected,setDaySelected} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex]);
    
    const handlePrevMonth =() =>{
        setCurrentMonthIndex(currentMonthIndex - 1);
    }
    const handleNextMonth =() =>{
        setCurrentMonthIndex(currentMonthIndex + 1);
    }
    
    useEffect(() => {
        setCurrentMonthIndex(monthIndex);
    }, [monthIndex]);

    const getDayClass = (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);  // Now
        const currDay = day.format(format); // param value
        const selectedDay = daySelected && daySelected.format(format);

        if (nowDay === currDay) {
            return "bg-blue-500 rounded-full text-white";
          } 
          else if (currDay === selectedDay) {
            return "bg-blue-100 rounded-full text-blue-600 font-bold";
          } 
          else {
            return "";
          }
    }
    
    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(),currentMonthIndex)).format("MMMM YYYY")}
                </p>
                <div>
                    <button onClick={handlePrevMonth}>
                        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                            chevron_left
                        </span>
                    </button>
                    <button onClick={handleNextMonth}>
                        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                            chevron_right
                        </span>
                    </button>
                </div>
            </header>

            <div className='grid grid-cols-7 grid-rows-6'>
                {/* Header */}
                {currentMonth[0].map((day,index)=>(
                    <span key={index} className='text-sm py-1 text-center text'>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {
                    currentMonth.map((row,rowIndex)=>(
                        <Fragment key={rowIndex}>
                            {row.map((day,index)=>(
                                <button 
                                    onClick={()=>{
                                        setSmallCalenderMonth(currentMonthIndex)
                                        setDaySelected(day)
                                    }}
                                    key={index} className={`py-1 w-full ${getDayClass(day)}`}>
                                        <span className='text-sm'>
                                            {day.format('D')}
                                        </span>
                                </button>
                            ))}
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}
