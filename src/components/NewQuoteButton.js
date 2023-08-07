import React from "react";
import { getRandomColor } from "../App";

const NewQuoteButton = ({ changeQuote, setRandomColor, randomColor }) => {
  return (
    <>
      <button
        id="new-quote"
        style={{ backgroundColor: randomColor, transition: "all 1s" }}
        onClick={() => {
          changeQuote((state) => !state);
          setRandomColor(getRandomColor());
        }}
        className="button"
      >
        New Quote
      </button>
    </>
  );
};

export default NewQuoteButton;
