import GlobalContext from '@/Pages/context/GobalContext';
import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'

export default function Day(props) {

  const [dayEvents,setDayEvents] = useState([]);
  
  const {setDaySelected,setShowEventModal,savedEvents,setSelectedEvent} = useContext(GlobalContext);
  
  useEffect(()=>{
    const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY")=== props.day.format("DD-MM-YY"));
    setDayEvents(events);
  },[savedEvents,props.day])

  const getCurrentDayClass = () =>{
    return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

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
        <div className='flex-1 cursor-pointer' 
              onClick={()=>{

                setDaySelected(props.day)
                setShowEventModal(true)
            }}
            
            >
            
            {dayEvents.map((evt,index)=>(
               <div key={index} 
                onClick={setSelectedEvent(evt)}
                className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
                {evt.title}
               </div>
           ))}
        </div>
    
    </div>
  )
}




// import GlobalContext from '@/Pages/context/GobalContext';
// import dayjs from 'dayjs'
// import React, { useContext, useEffect, useState } from 'react'

// export default function Day({ day, rowIdx }) {
//   const [dayEvents, setDayEvents] = useState([]);
//   const {
//     setDaySelected,
//     setShowEventModal,
//     savedEvents,
//     // filteredEvents,
//     setSelectedEvent,
//   } = useContext(GlobalContext);

//   useEffect(() => {
//     const events = savedEvents.filter(
//       (evt) =>
//         dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
//     );
//     setDayEvents(events);
//   }, [savedEvents, day]);

//   function getCurrentDayClass() {
//     return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
//       ? "bg-blue-600 text-white rounded-full w-7"
//       : "";
//   }
//   return (
//     <div className="border border-gray-200 flex flex-col">
//       <header className="flex flex-col items-center">
//         {rowIdx === 0 && (
//           <p className="text-sm mt-1">
//             {day.format("ddd").toUpperCase()}
//           </p>
//         )}
//         <p
//           className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
//         >
//           {day.format("DD")}
//         </p>
//       </header>
//       <div
//         className="flex-1 cursor-pointer"
//         onClick={() => {
//           setDaySelected(day);
//           setShowEventModal(true);
//         }}
//       >
//         {dayEvents.map((evt, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedEvent(evt)}
//             className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
//           >
//             {evt.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }