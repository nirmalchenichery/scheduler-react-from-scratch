import React, { useState } from 'react'
import CalendarDays from './Days';
import CalenderModal from './CalenderModal';
import PeopleModal from './PeopleModal';


const Calender = () => {
   
  const holidayList = ["2023-04-10", "2023-04-11", "2023-04-23", "2023-06-11"];
  
  const slots = [
      {
          date: "2023-04-09",
          slotes: [
              "08:00 ~ 09:00",
              "09:00 ~ 10:00",
              "10:00 ~ 11:00",
              "11:00 ~ 12:00",
          ],
      },
      { 
        date: "2023-04-12", 
        slotes: ["13:00 ~ 14:00", "15:00 ~ 16:00"] 
      },
      {
          date: "2023-04-13",
          slotes: ["17:00 ~ 18:00", "19:00 ~ 20:00", "21:00 ~ 22:00"],
      },
  ];
 
  const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
  ];

  const  [currentDay,setCurrentDay ] =  useState(new Date());
  const  [showCalender,setShowCalender ] =  useState(false);
  const  [seletedDate,setSeletedDate ] =  useState("");

  const  [seletedPeople,SetSeletedPeople ] =  useState("");
  const  [showNoPeople,setShowNoPeople ] =  useState(false);

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
    setShowNoPeople(false);
    setShowCalender(true);
  }

  const toggleModal = () => {
    setShowCalender(false);
    setShowNoPeople(!showNoPeople);
  };

  return (
      <>
      <div>
          <input 
            type="text" 
            className='w-80' 
            value={seletedDate}
            onChange={(e)=>setSeletedDate(e.target.value)}
            onClick={handleDate}
          />
          <span> 
            <input 
              type="text" 
              className='w-80' 
              value={seletedPeople}
              onChange={(e)=>SetNoPeople(e.target.value)}
              onClick={toggleModal}
            />
          </span>
          <span>
              <button>
                <span className=" cursor-pointer text-blue-600 mx-2 font-bold border rounded py-2 px-4 mr-5">
                    Search
                </span>
              </button>
          </span>
      </div>


      {
        showCalender &&
        <div className="calendar">
        
            <header className="calendar-header px-4 py-2 flex items-center">
              <button className="border rounded py-2 px-4 mr-5" 
                      onClick={handleReset}
              > Today </button>

              <button 
                    onClick={handlePrevMonth}
              >
                  <span className=" cursor-pointer text-gray-600 mx-2 font-bold border rounded py-2 px-4 mr-5">
                      Prevous
                  </span>
              </button>

              <p className='header-year'>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</p>

              <button 
                onClick={handleNextMonth}
              >
                <span className=" cursor-pointer text-gray-600 mx-2 font-bold border rounded py-2 px-4 mr-5">
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


      {
          showNoPeople &&  <PeopleModal toggleModal = {toggleModal} 
                                        SetSeletedPeople={SetSeletedPeople}
                                        setShowNoPeople={setShowNoPeople}
                            />
      }

        {/* {showNoPeople && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )} */}


      {/* } */}
      </>
  )
}
export default Calender;
