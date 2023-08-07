import React from "react";
import "./Quotes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const Quotes = ({ quote }) => {
  return (
    <>
      <p  id="text">
        <FontAwesomeIcon icon={faQuoteLeft} /> {quote && quote.quote}
      </p>
      <p  id="author">
        - {quote && quote.author}
      </p>
    </>
  );
};

export default Quotes;
