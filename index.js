import React, { Component, useState } from "react";
import { render } from "react-dom";
import CardList from "./CardList";
import Form from "./Form";
import "./style.scss";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook"
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu"
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  }
];

// class App extends Component {
//   const [profiles, setProfiles] = useState(testData);
//   render() {
//     return (
//       <div>
//         <div className="header">{this.props.title}</div>
//         <Form />
//         <CardList profiles={testData} />
//       </div>
//     );
//   }
// }

const appKey = 0;

const App = props => {
  const [profiles, setProfiles] = useState(testData);
  const addNewProfile = profiles => {
    console.log("App", profiles);
  };

  return (
    <div key={appKey + 1}>
      <div key={appKey + 1} className="header">
        {props.title}
      </div>
      <Form onSubmit={addNewProfile}/>
      <CardList profiles={testData} />
    </div>
  );
};

render(<App title="Github Cards App" />, document.getElementById("root"));
