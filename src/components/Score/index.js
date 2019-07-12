import React from "react";

function Score(props) {
  return (
    <div>
      <h2>Score: {props.score} chihuahuas | Top Score: {props.topScore} chihuahuas</h2>
    </div>
  );
}

export default Score;
