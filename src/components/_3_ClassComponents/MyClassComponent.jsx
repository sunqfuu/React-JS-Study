// React Class Component

// import
import { Component } from "react";

//Class Component
class MyClassComponent extends Component {
  // Display
  static displayName = "Sunqfu Class Component";

  // Constructor
  constructor(props) {
    super(props);
    console.log("Constructor");
    //Initial State
    this.state = {
      count: 0,
    };

    // Binding
    this.sunqfuIncrease = this.sunqfuIncrease.bind(this);
    this.sunqfuDecrease = this.sunqfuDecrease.bind(this);
    this.sunqfuReset = this.sunqfuReset.bind(this);
  } // End Construstor

  // Component Did Mount
  componentDidMount() {
    console.log("componentDidMount");
  }

  //Function
  sunqfuIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  sunqfuDecrease = () => {
    if (this.state.count === 0) return;
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  sunqfuReset = () => {
    this.setState((prevState) => ({
      count: 0,
    }));
  };

  //Render

  render() {
    // Object Destructuring
    const { count } = this.state;
    const { companyName } = this.props;

    //Return
    return (
      <div className="container text-center mt-5">
        <h1> {companyName}Class Component</h1>
        {/* <p className="display-6">{this.state.count}</p> */}
        <p className="display-6">{count}</p>
        <button className="btn btn-primary me-2" onClick={this.sunqfuIncrease}>
          Increase
        </button>
        <button className="btn btn-danger me-2" onClick={this.sunqfuDecrease}>
          Decrease
        </button>
        <button className="btn btn-warning me-2" onClick={this.sunqfuReset}>
          Reset
        </button>
      </div>
    );
  }
} //End Class Component

// Export
 export default MyClassComponent;

MyClassComponent.defaultProps = {
  data:  "React Class",
};
