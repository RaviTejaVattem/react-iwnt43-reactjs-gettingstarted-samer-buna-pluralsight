import React, { useState } from "react";
// import axios from "axios";

// const getData = user => {
//   // create a new XMLHttpRequest
//   var xhr = new XMLHttpRequest();

//   // get a callback when the server responds
//   xhr.addEventListener("load", () => {
//     // update the state of the component with the result here
//     console.log(xhr.responseText);
//   });
//   // open the request with the verb and the url
//   xhr.open("GET", `https://api.github.com/users/${user}`);
//   // send the request
//   xhr.send();
// };

//api.github.com/users

export default props => {
  const [userName, setUserName] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    const resp = axios
      .get(`https://api.github.com/users/${user}`)
      .subscribe(val => {
        console.log(val);
      });
    props.onSubmit(userName);
    getData(userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github username"
        value={userName}
        onChange={event => setUserName(event.target.value)}
      />
      <button>Add card</button>
    </form>
  );
};
