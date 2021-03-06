import { List, Card } from 'antd';
import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getDot } from '../../server/api';

/* eslint react/prop-types: 0 */

const data = [
  {
    title: '出诊医师',
  },
  {
    title: '预约未到',
  },
  {
    title: '已挂号',
  },
];

class Dot extends Component {
  state = {
    dotList: {
      DAY: [],
    },
  }
  componentDidMount = async () => {
    this.setState({
      dotList: await (await getDot()).json(),
    });
  }
  onDot = (item) => {
    console.log(item);
  }
  render() {
    return (
      <div>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                {
                  this.state.dotList.DAY.map(dot =>
                    <div key={dot.drId} tabIndex={0} role="button" onKeyPress={() => this.onDot(dot)} onClick={() => this.onDot(dot)}>{dot.drName}</div>)
                }
              </Card>
            </List.Item>
          )}
        />
        {this.props.children}
        <Link to="order" href="order">order</Link>
      </div>
    );
  }
}

export default Dot;
