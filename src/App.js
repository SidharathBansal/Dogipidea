import React from "react";
import ReactDOM from "react-dom";
import Dog from "./Dog";
import SearchParams from "./SearchParams";

const App = () => {
  var arr = [
    { name: "Bolt", weight: "50.70 Kg", breed: "Terrier" },
    { name: "PitBull", weight: "50.70 Kg", breed: "Bull" },
    { name: "Lion", weight: "5.70 Kg", breed: "husky" },
  ];
  return (
    <>
      <SearchParams/>
      <div id="wesite-title" >
        {arr.map((item) => (
          <Dog key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root") // place to render
);
