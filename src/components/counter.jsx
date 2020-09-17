import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };


  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontWeight: "bold", fontSize: 10 }}
          className={this.getBadgeClasses()}
        >
          {this.fromatCount()}
        </span>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button onClick={this.handleIncrement} className="btn btn-info btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }
  handleIncrement =()=> {
      this.setState({count: this.state.count + 1})

}
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning " : "primary";
    return classes;
  }

  fromatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
