import React from "react";

function Image(props) {
  return (
    <div>
      <img 
        onClick={props.onClick}
        alt={props.name}
        src={props.image}
      />
    </div>
  );
}

export default Image;
