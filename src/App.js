import { useState } from "react";
import "../src/App.css";
import QuotesBox from "./components/QuotesBox";

export const getRandomColor = () => {
  const red = Math.floor(Math.random() * 168);

  const blue = Math.floor(Math.random() * 168);
  const green = Math.floor(Math.random() * 168);
  return `rgb(${red},${green},${blue})`;
};

const App = () => {
  const [randomColor, setRandomColor] = useState(getRandomColor());

  return (
    <div 
      style={{ backgroundColor: randomColor, transition: "all 1s" }}
      className="container"
    >
      <QuotesBox setRandomColor={setRandomColor} randomColor={randomColor} />
    </div>
  );
};

export default App;
