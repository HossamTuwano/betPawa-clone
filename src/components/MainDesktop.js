import React from "react";
import "../MainDesktop.css";
class MainDesktop extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code

  render() {
    return (
      <div className="main">
        <div>main</div>
      </div>
    );
  }
}

export default MainDesktop;
