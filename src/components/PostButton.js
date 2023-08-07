import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const PostButton = ({ ke, randomColor }) => {
  return (
    <a
      style={{ backgroundColor: randomColor, transition: "all 1s" }}
      className="button"
      id="tweet-quote"
      href="https://twitter.com/intent/tweet"
      target="_blank"
      rel="noreferrer"
    >
      {" "}
      {ke && ke === "twitter" ? (
        <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
      ) : (
        <FontAwesomeIcon style={{ color: "white" }} icon={faTumblr} />
      )}
    </a>
  );
};

export default PostButton;
