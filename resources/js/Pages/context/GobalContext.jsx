import React, { createContext } from 'react'

const GlobalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalenderMonth:0,
    setSmallCalenderMonth: (index) => {},
    daySelected:null,
    setDaySelected:(day)=>{},
    showEventModal:false,
    setShowEventModal:()=>{},
    dispatchCalEvent: ({ type, payload }) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
    labels:[],
    setLabels: () => {},
    updateLabel:() => {},
    filteredEvents:[],
    holiday:[]
})

export default GlobalContext;
