import React, { Component } from 'react';
import { DatePicker } from 'antd';

class NotFound extends Component {
  state = {
    name: '404 page',
  }
  render() {
    return (
      <div>
        {this.state.name}
        <DatePicker />
      </div>
    );
  }
}

export default NotFound;
