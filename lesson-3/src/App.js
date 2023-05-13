import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const btnColors = {
    lime: "#A3CECE",
    orange: "#FFCC73",
    lightGrey: "#CDCDCD",
    white: "#FCFCFC",
  };

  return (
    <div className="App">
      <Button type="round" color={btnColors.lime}>
        Отправить
      </Button>
      <Button type="big" color={btnColors.orange}>
        Девочки
      </Button>
      <Button
        type="small"
        color={btnColors.white}
        border={true}
        borderColor={btnColors.lime}
      >
        Далее
      </Button>
    </div>
  );
}

export default App;
