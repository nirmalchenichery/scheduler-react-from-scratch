import { useEffect, useState } from "react";
// npm install moment 
import moment from 'moment';
import SlotListItem from "./SlotListItem";

const CalendarDays = (props) => {

  //  const [timeSlots,setTimeSlots] = useState([])
  //  const slot =(fromTime,toTme)=>{
  //    let startTime = moment(fromTime,'HH:mm');
  //    let endTime = moment(toTme,'HH:mm');
  //    if(endTime.isBefore(startTime)){
  //       endTime.add(1,'day');
  //    }
  //    let arr =[];
  //    while(startTime <= endTime){
  //     arr.push(new moment(startTime).format('HH:mm'));
  //     startTime.add(60,'minutes');
  //    }
  //    return arr;
  //  }
  //  useEffect(()=>{
  //     setTimeSlots(slot('08:00','16:00'))
  //  },[]);

  // console.log(props.day)


  const [timeSlots,setTimeSlots] = useState([])
  const [message,setMessage] = useState("")

  const [selectedDay,SetSelectedDay] = useState("")
  // let slotList = [];

  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {

    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }
    
    const convertedDate = firstDayOfMonth.getFullYear()+'-' + 
                          (firstDayOfMonth.getMonth() + 1).toString().padStart(2, '0') + '-'+ 
                          firstDayOfMonth.getDate();

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      name: new Date(firstDayOfMonth).toLocaleString('en-us', {weekday:'long'}),
      selected: (firstDayOfMonth.toDateString() === new Date().toDateString()),
      year: firstDayOfMonth.getFullYear(),
      isHoliday : props.holiday.includes(convertedDate)
    }

    currentDays.push(calendarDay);
  }

  
  const getDayClass = (day) =>{
    if(day.isHoliday){
      return "bg-red-500 text-white"
    }
    else if(day.selected){
      return "bg-blue-500 text-white"
    }
    return "";
  }


  const getSlot = (day) =>{
     const result =  props.slots.find(({ date }) => date === (new moment(day.date).format('YYYY-MM-DD')));
   
    if(result){
      setTimeSlots(result["slotes"])
      console.log(result["slotes"]); // { name: 'cherries', quantity: 5 }
    }else{
      setMessage("No Slot Available")
      setTimeSlots([])
    }

    SetSelectedDay(day);

  }


  const slotList = timeSlots.map( (slot,index) => {
    return <SlotListItem key={index} slot={slot} 
                         setSeletedDate={props.setSeletedDate} 
                         selectedDay={selectedDay.date} 
                         setShowCalender={props.setShowCalender}/>
  })

  return (
    <div className="table-content">
     
        {
          currentDays.map((day,index) => {

            return (
              <div key={index}className={"calendar-day" + (day.currentMonth ? " current " : "") + getDayClass(day)}
                    onClick={()=>getSlot(day)}
              >
                <div>
                  <p className="text-sm mt-1 "> {day.name.substring(0,3)}</p>
                </div>
                
                <div>
                  <p className={`text-sm py-4 p-1 my-1 text-center`}>{day.number}</p>
                </div>
              </div>
            )
          })
        }

        {
          (timeSlots.length > 0) ? slotList : <div> {message} </div> 
        }

    </div>

  )
}

export default CalendarDays;