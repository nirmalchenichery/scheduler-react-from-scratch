import React, { useState } from 'react'

export default function PeopleModal(props) {

    const handleChange = (event) => {
        console.log( event.name)

        console.log({value: event.target.value});
    }
    const datas = [
        {
          id: 1,
          name: 'Adult',
        //   age: 21
        },
        {
          id: 2,
          name: 'Child',
        //   age: 30
        }
      ];
    
      const [data, setData] = useState(datas);
    
      const updateState = (index) => (e) => {


        const newArray = data.map((item, i) => {

            // console.log(item)
            // console.log(i)

            // let new_name = e.target.value;
            // if(item.name === 'candybar'){
            //    new_name = 'Candy Bar';
            // } else if (item.name === 'whitechocolatebar'){
            // new_name = 'White Chocolate Bar';
            // }
            // return ({ ...item, new_name });



            // if (index === i) {


            //     return { ...item, "no_of": e.target.value };
            // } else {
            //     return item;
            // }



          if (index === i) {
            return { ...item, [e.target.name]: item.name ,"new_name" :e.target.value};
          } else {
            return item;
          }

        //   if (index === i) {
        //     return { ...item, [e.target.name]: e.target.value };
        //   } else {
        //     return item;
        //   }


        });



        setData(newArray);
      };

      console.log(data)
      

  return (
        <div className="modal">
            <div onClick={props.toggleModal} className="overlay"></div>
            <div className="modal-content">
                {data.map((datum, index) => {

                   return  (<div>
                           
                           <input
                        type="text"
                        name="name"
                        value={datum.name}
                        onChange={updateState(index)}
                    />

                        </div>   )

                    // console.log(datum)
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
