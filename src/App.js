import React from 'react';
import ReactDOM from 'react-dom';
import Dog from './Dog';

const App = () => {
  var arr = [
    { name: "Bolt", weight: "50.70 Kg", breed: "Terrier" },
    { name: "PitBull", weight: "50.70 Kg", breed: "Bull" },
    { name: "Lion", weight: "5.70 Kg", breed: "husky" },
  ];
  return React.createElement(
    "div", // tag
    { id: "website-title" }, // attributes with the element
    [
      React.createElement("h1", {}, "Dog Website"),
      arr.map((item) => React.createElement(Dog, item)),
    ] // content can be another component also.
  );
};

ReactDOM.render(
  React.createElement(
    // component to render
    App
  ),
  document.getElementById("root") // place to render
);
