import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  let [gap, setGap] = useState(1);
  const handleGap = (e) => {
    setGap(parseInt(e.target.value));
  };
  const handleInc = () => {
   
      setCounter(counter + gap)
   
   
  };
  const handleDes = () => {
    if (counter <= 0) return; // preventing counter from decreasing below 0
    setCounter(counter - gap);
  };

  const handleReset = () => {
    setCounter(0);
    setGap(1);
  };
  return (
    <>
      <div className="parent">
        <h1>Counter Project</h1>
        <h3>counter value : {counter}</h3>
        <input
          type="number"
          placeholder="enter nuber"
          value={gap}
          onChange={handleGap}
        />
        <div className="button">
          <button onClick={handleInc} disabled={counter>=100}>Increase</button>
          <button onClick={handleDes}>Decrease</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;
