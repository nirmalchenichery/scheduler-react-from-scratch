import React, { useState } from 'react'

export default function PeopleModal(props) {

    const handleChange = (event) => {
        console.log( event.name)

        console.log({value: event.target.value});
    }
    const datas = [
        {
          id: 1,
          name: 'Nick',
          age: 21
        },
        {
          id: 2,
          name: 'Lara',
          age: 30
        }
      ];
    
      const [data, setData] = useState(datas);
    
      const updateState = (index) => (e) => {
        const newArray = data.map((item, i) => {
          if (index === i) {
            return { ...item, [e.target.name]: e.target.value };
          } else {
            return item;
          }
        });
        setData(newArray);
      };

      console.log(data)
      

  return (
        <div className="modal">
            <div onClick={props.toggleModal} className="overlay"></div>
            <div className="modal-content">
                 <div>
                    <button className="close-modal" onClick={props.toggleModal}>
                        X
                    </button>
                </div>

                <div>
                    大人 <span> <input type="number" name="adult" step="1" min={0} onChange={handleChange}/></span>
                </div>   

                <div>
                    子供 <span> <input type="number" name="child" step="1" min={0} onChange={handleChange}/></span>
                </div>

                <div className='mt-2 text-center'>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded">
                        OK
                    </button>
                </div>

                {data.map((datum, index) => {

                    <div>
                    大人 <span> <input type="number" name="adult" step="1" min={0} onChange={handleChange}/></span>
                    </div>   

                    console.log(datum)
                    // <li key={datum.name}>
                    // <input
                    //     type="text"
                    //     name="name"
                    //     value={datum.name}
                    //     onChange={updateState(index)}
                    // />
                    // </li>;
                    })}





            </div>
         </div>
  )
}
