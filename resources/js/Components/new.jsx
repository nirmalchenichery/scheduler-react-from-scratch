import { useState, useEffect } from "react";

export default function App() {
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    getStuffs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStuffs = () => {
    let data = [
      {
        id: 1,
        name: "candy",
        qty: 20
      },
      {
        id: 2,
        name: "book",
        qty: 15
      }
    ];
    setStuffs(data);
  };

  const handleChange = (e) => {
    console.log("stuffs1", stuffs);
    setStuffs(
      // stuffs.map((item) =>
      //   item.id === parseInt(e.target.id, 10)
      //     ? { ...item, qty: e.target.qty }
      //     : item
      // )
      stuffs.map((item) =>
        item.id === +e.target.id ? { ...item, qty: +e.target.value } : item
      )
    );
    // console.log("stuffs2", stuffs);
  };

  console.log(stuffs);

  return (
    <div className="App">
      {stuffs.length > 0 ? (
        stuffs.map((item, index) => (
          <div key={item.id}>
            <label>{item.name}</label>
            <input
              type="text"
              id={item.id}
              name="qty"
              value={item.qty}
              onChange={(e) => handleChange(e)}
            />
          </div>
        ))
      ) : (
        <span>No data</span>
      )}
    </div>
  );
}
