import "./styles.css";
import { useState } from "react";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 42) return;
    const newTemperature = temperatureValue + 1;
    if (newTemperature > 20) {
      setTemperatureColor("hot");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 20) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="App">
      <div className="temperature_control_container">
        <div className={`temperature_control ${temperatureColor} `}>
          <h2>{temperatureValue}°C</h2>
        </div>

        <div className="buttonContainer">
          <button className="mybutton" onClick={increaseTemperature}>
            +
          </button>
          <button className="mybutton" onClick={decreaseTemperature}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
