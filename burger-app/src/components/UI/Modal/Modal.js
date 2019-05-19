import React, { Component } from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/AuxComponent/AuxComponent";

class Modal extends Component {
  //This could be a functional component
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
