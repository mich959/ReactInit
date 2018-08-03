import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old
      </p>
      <h5>{props.children}</h5>
    </div>
  );
};
export default person;
