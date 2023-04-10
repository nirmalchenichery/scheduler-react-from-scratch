

const CalendarDays = (props) => {

  const holiday = [ '2023-04-10', '2023-04-11', '2023-04-23', '2023-06-11'];
  // console.log(holiday.includes('2023-03-11'));
  // true


  // // https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
  // var date = new Date('2013-03-10T02:00:00Z');


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
      isHoliday : holiday.includes(convertedDate)
    }

    currentDays.push(calendarDay);
  }

  
  const getDayClass = (day) =>{

    console.log(day.isHoliday)

    if(day.isHoliday){
      return "bg-red-500 text-white"
    }
    else if(day.selected){
      return "bg-blue-500 text-white"
    }
   
    // return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    //   ? "bg-blue-600 text-white rounded-full w-7"
    //   : "";

    return "";
  }


  const getCurrentDayClass = () =>{
    // return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    //   ? "bg-blue-600 text-white rounded-full w-7"
    //   : "";

    return "";
  }

  return (
    <div className="table-content">
      {
        currentDays.map((day,index) => {

          return (
            // <div key={index}className={"calendar-day" + (day.currentMonth ? " current " : "") + (day.selected ? "  bg-blue-500 text-white" : "")}
            <div key={index}className={"calendar-day" + (day.currentMonth ? " current " : "") + getDayClass(day)}
                  // onClick={() => props.changeCurrentDay(day)}
                  onClick={() => day.isHoliday ? "": alert("Event adding popups")} 
            >
              <div>
                <p className="text-sm mt-1 "> {day.name.substring(0,3)}</p>
              </div>
              
                <div>
              <p className={`text-sm py-4 p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.number}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CalendarDays;