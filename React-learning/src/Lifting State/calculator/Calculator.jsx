import {useState} from "react";
import TemperatureInput from "./TempInput";

function toCelsius(f) {
  return ((f - 32) * 5 / 9).toFixed(2);
}

function toFahrenheit(c) {
  return ((c * 9 / 5) + 32).toFixed(2);
}

function Calculator () {
    const [temperature, setTemperature] =useState("");
    const [scale,setScale] =useState("c");

    const handleCelsiusChange= (value) => {
        setTemperature(value);
        setScale("c")
    }

    const handleFahrenheitChange = (value) => {
        setTemperature(value);
        setScale("f")
    }

    const celsius= scale==="f" ? toCelsius(parseFloat(temperature)):temperature;
    const fahrenheit = scale==="c" ? toFahrenheit(parseFloat(temperature)):temperature;

    return (
        <div>
            <h3>Celsius</h3>
            <TemperatureInput 
                value={celsius}
                onChange={handleCelsiusChange}/>

            <h3>Fahrenheit</h3>
            <TemperatureInput 
                value={fahrenheit}
                onChange={handleFahrenheitChange}/>
        </div>
    )
}

export default Calculator;