import React from "react";
import Card from "./Card";

export default props => (
  <div>
    {props.profiles.map(user => (
      <Card key={user.id} {...user} />
    ))}
  </div>
);
