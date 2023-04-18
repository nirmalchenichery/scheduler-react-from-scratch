import { useState, useEffect } from "react";

export default function PeopleModal(props) {

  const [noOfPeopleSelected, SetNoOfPeopleSelected] = useState([]);

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getList = () => {
    let data = [
      {
        id: 1,
        label: "大人"
      },
      {
        id: 2,
        label: "子供"
      }
    ];
    SetNoOfPeopleSelected(data)
  };

  const handleChange = (e) => {
    SetNoOfPeopleSelected(
      noOfPeopleSelected.map((item) =>
        item.id === +e.target.id ? { ...item, no_of_people: +e.target.value } : item
      )
    );
  };

  const handleOk =() =>{
    let peopleSelected ="";
    noOfPeopleSelected.map((item) =>
      peopleSelected = (peopleSelected ? (peopleSelected + " . "):peopleSelected) + item.label + (item.no_of_people ? item.no_of_people : 0) + "名"
    );
    props.SetSeletedPeople(peopleSelected);
    props.setShowNoPeople(false)
  }

  return (
    // className="modal"
    <div className="border"> 
        {/* <div onClick={props.toggleModal} className="overlay"></div>
          <div className="modal-content"> */}
           
              {noOfPeopleSelected.length > 0 ? (
                  noOfPeopleSelected.map((item, index) => (
                    <div key={item.id}>
                      <label>{item.label}</label>
                      <input
                        type="number"
                        id={item.id}
                        name="no_of_people"
                        min={0}
                        value={item.no_of_people ? item.no_of_people : 0}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  ))
                ) : (
                  <span>No data</span>
                )
                
              }

            <div className='mt-2 ml-10'>
                <button 
                    onClick={handleOk}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded">
                    OK
                </button>
            </div>
          {/* </div> */}
    </div>
  );
}


// return (
  //       <div className="modal">
  //           <div onClick={props.toggleModal} className="overlay"></div>
  //           <div className="modal-content">
             
  //           </div>
  //        </div>
  // )