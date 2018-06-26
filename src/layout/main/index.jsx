import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const { Header, Sider, Content } = Layout;
/* eslint react/prop-types: 0 */
class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {this.props.user.map(item => (
              <Menu.Item key={item}>
                <Icon type="user" />
                <span>{item}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
            <Link to="login" href="/">Invoices</Link>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

const mapDispatch = ({ user: { getUser } }) => ({
  getUser: () => getUser(),
});

export default connect(mapState, mapDispatch)(SiderDemo);
