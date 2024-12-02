import React, { Component } from 'react';
import './LifecycleDemo.css';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component has been mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component was updated.');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="lifecycle-demo">
        <h1>Explore React Lifecycle Methods</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
