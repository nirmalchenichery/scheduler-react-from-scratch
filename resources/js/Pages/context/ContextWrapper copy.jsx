import React, { useEffect, useReducer, useState } from "react"
import GlobalContext from "./GobalContext"
import dayjs from "dayjs"

function savedEventsReducer(state, { type, payload }) {
    switch (type) {
      case "push":
        return [...state, payload];
      case "update":
        return state.map((evt) =>
          evt.id === payload.id ? payload : evt
        );
      case "delete":
        return state.filter((evt) => evt.id !== payload.id);
      default:
        throw new Error();
    }
  }
  function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  }

export default function ContextWrapper(props) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month());  // chnage to current month 
    const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs()); //Chnage to current date
    const [showEventModel, setShowEventModel] = useState(false);
    const [savedEvents,dispatchCalEvent] = useReducer(
        savedEventsReducer,
        [], //initial Value
        initEvents //
    );

    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(()=>{
        localStorage.setItem('savedEvents',JSON.stringify(savedEvents))
    },[savedEvents])

    useEffect(()=>{
        if(smallCalenderMonth !== null){
            setMonthIndex(smallCalenderMonth)
        }
    },[smallCalenderMonth])

    return (
        <GlobalContext.Provider
            value={{
                monthIndex,
                setMonthIndex,
                smallCalenderMonth,
                setSmallCalenderMonth,
                daySelected,
                setDaySelected,
                showEventModel,
                setShowEventModel,
                dispatchCalEvent,
                savedEvents,
                selectedEvent,
                setSelectedEvent
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
