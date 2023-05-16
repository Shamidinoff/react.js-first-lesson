import "./App.css";
import { useEffect, useState } from "react";
import Images from "./components/Images/Images";
import Memo from "./components/Memo/Memo";

function App() {
  const [number, setNumber] = useState(5);
  const [color, setColor] = useState("black");

  useEffect(
    function () {
      console.log("Number increased");
    },
    [number]
  );

  function increaseNumber() {
    setNumber((prevState) => prevState + 1);
  }

  function changeColor() {
    if (color === "black") {
      setColor("white");
    } else {
      setColor("black");
    }
  }

  return (
    <div className="App">
      {/* <Images /> */}
      <Memo />

      {/* <h1>
        {number} {color}
      </h1>
      <button onClick={increaseNumber}>Change number</button>
      <button onClick={changeColor}>Change color</button> */}
    </div>
  );
}

export default App;
