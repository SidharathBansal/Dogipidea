import React from "react";

const Dog = (props) => {
  const { name, weight, breed } = props;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{weight}</h3>
      <h3>{breed}</h3>
    </div>
  );
};

export default Dog;
