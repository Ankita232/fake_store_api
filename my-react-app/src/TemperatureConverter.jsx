import React, { useState } from 'react';
// Child component for input
function TemperatureInput({ temperature, onTemperatureChange }) {
const handleChange = (event) => {
onTemperatureChange(event.target.value);
};
return (
<div>
<label>
Temperature (°C):
<input type="number" value={temperature} onChange={handleChange} />
</label>
</div>
);
}
// Child component for displaying temperature
function TemperatureDisplay({ temperature }) {
return (
<div>
<h2>Current Temperature: {temperature} °C</h2>
</div>
);
}
// Parent component
// function App() {

// const [temperature, setTemperature] = useState(20); // Initial temperature
// const handleTemperatureChange = (newTemperature) => {
// setTemperature(newTemperature);
// };
// return (
// <div>
// <h1>Temperature Converter</h1>
// <TemperatureInput
// temperature={temperature}
// onTemperatureChange={handleTemperatureChange}
// />
// <TemperatureDisplay temperature={temperature} />
// </div>
// );
// }
export default App;