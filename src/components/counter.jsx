import React, { Component } from "react";
class Counter extends Component {
  //   state = {
  //     tags: ["tag1", "tag2", "tag3"],
  //   };
  //   // have access to the handleIncrement function
  //   constructor() {
  //     super();
  //     // return new function and reset the handleincrement function
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // use arrow function can do the inherit but if it is not work
  // use the constructor
  //   handleIncrement = (product) => {
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
