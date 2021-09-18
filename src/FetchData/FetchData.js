import React, { useEffect } from "react";

const FetchData = () => {
  const [data, setData] = React.useState("");
  const [single, setSingle] = React.useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    async function getData(){
      let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      let data = await res.json()

      setSingle(data)
      console.log(data)
    }

    getData()
  }, [])



  return (
    <div>

      <h2>{single.title}</h2>
      {data && 
        data.map((d,i) => {
          return <div key={i}>
              <h2>{d.title}</h2>
              <h4>{d.id}</h4>
          </div>;
        })}


    </div>
  );
};

export default FetchData;
