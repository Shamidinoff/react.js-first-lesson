import { useState, useMemo, useEffect } from "react";

function Memo() {
  // const

  const [number, setNumber] = useState(1);

  const [isDark, setIsDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      width: 400,
      backgroundColor: isDark === true ? "black" : "white",
      color: isDark === true ? "white" : "black",
      margin: "0 auto",
    };
  }, [isDark]);

  const doubledNumber = useMemo(() => {
    return extraSlowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("Theme is changed");
  }, [themeStyles]);

  // return

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      ></input>
      <button onClick={() => setIsDark((prevState) => !prevState)}>
        Change theme
      </button>
      <div style={themeStyles}>{number}</div>
    </div>
  );
}

function extraSlowFunction(num) {
  console.log("SLOW FUNCTION STARTS");
  for (let i = 0; i < 100000; i++) {}
  return num * 2;
}

export default Memo;
