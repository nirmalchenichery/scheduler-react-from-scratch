import React from "react";

export default function CalenderHeader() {

    // context 46:28
    return (
        <header className="px-4 py-2 flex items-center">
            {/* <img src="" alt="" className="mr-2 w-12 h-12" /> */}
            <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calender </h1>
            <button className="border rounded py-2 px-4 mr-5"> Today </button>

            <button >
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron_left
                </span>
            </button>
            <button >
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron_right
                </span>
            </button>
        </header>
    );
}
