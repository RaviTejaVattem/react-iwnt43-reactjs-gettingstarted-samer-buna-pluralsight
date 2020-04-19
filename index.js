import React, { Component, useState } from "react";
import { render } from "react-dom";
import CardList from "./CardList";
import Form from "./Form";
import "./style.scss";

const appKey = 0;

const App = props => {
  const [profiles, setProfiles] = useState([]);
  const addNewProfile = apiData => {
    setProfiles([...profiles, ...apiData]);
  };

  return (
    <div key={appKey + 1}>
      <div key={appKey + 1} className="header">
        {props.title}
      </div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

render(<App title="Github Cards App" />, document.getElementById("root"));
