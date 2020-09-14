import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // pass key, value and id is the props and onDelete is the function
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //value={counter.value}
            //id={counter.id}
            // use this code below can replace the upper two code which represent all the counter props
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
