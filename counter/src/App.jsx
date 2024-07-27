import React, { useState } from "react";

const App = () => {
  let [counter,setCounter] = useState(1)
  let increase = ()=>{
    setCounter(++counter)
  }
  let decrease = ()=>{
    if(counter<=0) return;  // preventing counter from decreasing below 0
    setCounter(counter -1)
  }
  return (
    <>
    <div className="parent" style={{width:"100%",display:"flex",alignItems:'center',flexDirection:"column"}}>

      <h1>Counter Project</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={ decrease }>Decrease</button>
    </div>
    </>
  );
};

export default App;
