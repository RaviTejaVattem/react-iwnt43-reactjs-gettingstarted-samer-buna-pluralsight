import React from "react";

export default props => (
  <div className="github-profile">
    <img src={props.avatar_url} />
    <div className="info">
      <div className="name">{props.name}</div>
      <div className="company">{props.company}</div>
    </div>
  </div>
);
