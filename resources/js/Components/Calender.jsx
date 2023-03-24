
import React, { Fragment, useState } from 'react'
import CalenderHeader from './CalenderHeader'
import Month from './Month'
import Sidebar from './Sidebar'
import {getMonth} from './UtilityFunction'

export default function Calender() {
  // Pass value to function and function will give you that month
  console.log(getMonth())

  const [currentMonth,setCurrentMonth] = useState(getMonth());

  // const 

  return (
    <Fragment>
      <div className="h-screen flex flex-col">
          <CalenderHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth}/>

          </div>

      </div>
    </Fragment>
  )
}
