import React from 'react';

const Dog = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h3", {}, props.name),
      React.createElement("h3", {}, props.weight),
      React.createElement("h3", {}, props.breed),
    ]);
};

export default Dog;