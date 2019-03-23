import React from "react";
import Title from "../Title";
import styles from "./CustomHeader.scss";

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleClick() {
    this.setState({ text: "Click" });
  }

  render() {
    return (
      <React.Fragment>
        <h1
          className={`${styles.header} ${styles.normal}`}
          onClick={() => this.handleClick()}
        >
          Hola Clase <span>{this.state.text}</span>
        </h1>
        <Title />
      </React.Fragment>
    );
  }
}

export default CustomHeader;
