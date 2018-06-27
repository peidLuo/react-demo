import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

const FormItem = Form.Item;
/* eslint react/prop-types: 0 */

class LoginForm extends Component {
  shouldComponentUpdate = (prevProps) => {
    if (prevProps.user.length) {
      navigate('/counter');
    }
    return true;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getUser({ ...values, clinicId: this.props.clinicId });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="logo">
          <img src="http://www.medlinker.com/dist/sitenew/img/common/logo_2x.png" alt="AI演示" />
        </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const mapState = state => ({
  clinicId: state.clinicId,
  user: state.user,
});

const mapDispatch = ({ user: { getUser } }) => ({
  getUser: payload => getUser(payload),
});

export default connect(mapState, mapDispatch)(Form.create()(LoginForm));
