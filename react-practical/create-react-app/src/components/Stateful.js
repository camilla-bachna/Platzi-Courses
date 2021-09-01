//implement the use state method
import React, { Component } from "react";

/* a React component declaration */
class Stateful extends Component {
  /* add logic */
  constructor(props) {
    /* initialize them */
    super(props);
    /* assign state, components properties */
    this.state = { hello: "Hello World" };
  }
  /* render properties from the state */
  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Stateful;

/* Though props don't have a local state they can inherit state and life-cycle features using Hooks 
import React, { useState } from "react";
//a React stateless functional component
const ExampleComponent = (props) => {
  const alertLocation = (event) => {
    alert(`This content is from ${location}`);
  }
  // when the component is instantiated send the div to the html document
  return(
    <div><a href="#" onClick={alertLocation}>Location?</a></div>;
  )
}

// functional component declaration
const ExampleComponent = () => {
  //set a variable to the useState function invocation
  const [location, setLocation] = useState("over there");
};*/
