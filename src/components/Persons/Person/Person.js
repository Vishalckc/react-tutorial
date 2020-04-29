import React, { Component } from "react";
import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import propTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputELement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Auxiliary>
        <AuthContext.Consumer>
          {(context) => {
            return context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in</p>
            );
          }}
          </AuthContext.Consumer>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            /*  ref={(inputEl)=>this.inputELement=inputEl} */
            ref={this.inputElementRef}
            onChange={this.props.changed}
            value={this.props.name}
          />
        
      </Auxiliary>
    );
  }
}

//Proptypes is a JavaScript component property to validate the value passed is valid or not
Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func,
};
export default withClass(Person, classes.Person);
