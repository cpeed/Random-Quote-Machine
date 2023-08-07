import React, { useEffect, useState } from "react";
import "../components/QuotesBox.css";
import ButtonsBox from "./ButtonsBox";
import Quotes from "./Quotes";

import quotes from "../assets/quotes.json";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * (quotes.length - 1))];
};

const QuotesBox = ({ setRandomColor, randomColor }) => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [changeQuote, setChangeQuote] = useState(false);
  useEffect(() => {
    setQuote(getRandomQuote());
  }, [changeQuote]);

  return (
    <div
      className="quotes-container"
      id="quote-box"
      style={{ color: randomColor }}
    >
      <Quotes key={quote.author} quote={quote} />

      <ButtonsBox
        changeQuote={setChangeQuote}
        setRandomColor={setRandomColor}
        randomColor={randomColor}
      />
    </div>
  );
};

export default QuotesBox;
