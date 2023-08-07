import React from "react";
import NewQuoteButton from "./NewQuoteButton";
import PostButton from "./PostButton";
import "./ButtonsBox.css";
const ButtonsBox = ({ changeQuote, setRandomColor ,randomColor}) => {
  return (
    <div className="buttons-container">
      <PostButton ke="twitter" randomColor={randomColor} />
      
      <NewQuoteButton
        changeQuote={changeQuote}
        setRandomColor={setRandomColor}
        randomColor={randomColor}
      />
    </div>
  );
};

export default ButtonsBox;
