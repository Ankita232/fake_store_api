// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }

// function Contact() {
//   return <h2>Contact Page</h2>;
// }


// function App() {
//   return (
//     <BrowserRouter>

//       <nav>
//         <Link to="/">Home</Link> | 
//         <a href="/">Home with hyperlink</a> | 
//         <Link to="/about">About</Link> | 
//         <a href="/about">About with hyperlink</a> | 
//         <Link to="/contact">Contact</Link>
//         <a href="/contact">Contact</a>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
// import Add from "./Add"
// import AdditionOfNumber from "./AdditionOfNumber"
// import CheckPositiveNegative from "./CheckPositiveNegative"
// import Cube from "./Cube"
// import FizzBuzz from "./FizzBuzz"
// import GetSquare from "./GetSquare"
// import GithubUsers from "./GithubUsers"
// import HelloWorld from "./HelloWorld"
// import Sqr from "./Sqr"
// import Users from "./Users"
import FakeStoreApi from './FakeStoreApi';
import Mutator from './Mutator';
import Accessor from './Accessor';


function App() {
  //     const handleTemperatureChange = (newTemperature) => {
    //     setTemperature(newTemperature);
    //   const [temperature, setTemperature] = useState(20); // Initial temperature
    //     };
    
  //   
  // const[counter,setCounter]= useState(0)
  return (
    <>
  {/* //   <Mutator setCounter={setCounter}/> */}
  {/* //   <Accessor counter={counter}/> */}
      {/* Hello World 
      <HelloWorld/>
      <Sqr num ={3}/>
      <Sqr num ={8}/>

      <Cube/>
      <Add num1={3}  num2={4}/>
      <CheckPositiveNegative/> */}
      {/* <FizzBuzz/> */}
      {/* <GetSquare/>
      <AdditionOfNumber/> */}
      {/* <Users/> */}
      {/* <GithubUsers/> */}
       <FakeStoreApi/> 
    
{/*     
    <div>
    <h1>Temperature Converter</h1>
    <TemperatureInput
    temperature={temperature}
    onTemperatureChange={handleTemperatureChange}
    />
    <TemperatureDisplay temperature={temperature} />
    </div>
    
    
    </>
)
}
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
} */}


// </>)

// }

}
export default App;

