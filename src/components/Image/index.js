import React from "react";

function Image(props) {
  const style = {
    width: "180px"
  }
  return (
    <div>
      <img 
        style={style}
        onClick={props.onClick}
        alt={props.name}
        src={props.image}
      />
    </div>
  );
}

export default Image;
