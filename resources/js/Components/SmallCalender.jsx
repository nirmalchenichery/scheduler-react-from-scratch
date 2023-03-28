import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getMonth } from './UtilityFunction';

export default function SmallCalender() {

    // 1:14:20
    const [currentMonthIndex,setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth,setCurrentMonth] = useState(getMonth())

    useEffect(()=>{
        setCurrentMonth(getMonth(currentMonthIndex));
    },[currentMonthIndex])

    const handlePrevMonth =() =>{
        setCurrentMonthIndex(currentMonthIndex - 1);
    }
    const handleNextMonth =() =>{
        setCurrentMonthIndex(currentMonthIndex + 1);
    }
    
    const handleReset =() =>{
        setCurrentMonthIndex(dayjs().month()); //current month
    }

    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(),currentMonthIndex)).format("MMMM YYYY")}
                </p>
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
            </header>            
        </div>
    )
}
