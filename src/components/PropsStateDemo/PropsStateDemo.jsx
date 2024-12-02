import React, { Component } from 'react';
import './PropsStateDemo.css';

class PropsStateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Welcome to React!' };
  }

  updateMessage = () => {
    this.setState({ message: 'React is awesome!' });
  };

  render() {
    return (
      <div className="props-state-demo">
        <h1>{this.state.message}</h1>
        <p><strong>Message from Parent Component:</strong> {this.props.parentMessage}</p>
        <button onClick={this.updateMessage}>Click to Update Message</button>
      </div>
    );
  }
}

export default PropsStateDemo;
