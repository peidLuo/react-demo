import React, { Component } from 'react';

class Index extends Component {
  state = {
    name: 'passport',
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}

export default Index;
