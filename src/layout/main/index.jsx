import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const { Header, Sider, Content } = Layout;
const TYPE = ['appstore-o', 'user', 'setting', 'solution', 'red-envelope', 'area-chart', 'cloud', 'message'];
const PATH = ['/counter', '/dot', '/setting', '/pharmacy', '/finance', '/report', '/servers'];

/* eslint react/prop-types: 0 */
class SiderDemo extends Component {
  state = {
    collapsed: false,
    current: '',
  };
  componentDidMount = () => {
    if (!this.props.user.length) {
      this.props.getUser();
    }
  }
  onMenuClick = ({ item, key }) => {
    this.setState({
      current: key,
    });
    this.props.navigate(item.props.path);
  }
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
          width={120}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onSelect={this.onMenuClick}
            selectedKeys={[this.state.current || this.props.user[0]]}
          >
            {this.props.user.map((item, index) => (
              <Menu.Item key={item} path={PATH[index]}>
                <Icon type={TYPE[index]} />
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
            {this.props.children}
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
