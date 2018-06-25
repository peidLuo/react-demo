// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';
/* eslint react/prop-types: 0 */

const FormItem = Form.Item;
const code = {
  width: '200px',
};

class PassPort extends Component {
  // static propTypes = {
  //   clinicId: PropTypes.number.isRequired,
  //   getClinicId: PropTypes.func.isRequired,
  // }
  componentDidMount = () => {
    const clinicCookie = document.cookie.indexOf('CLINICID') !== -1;
    if (!clinicCookie) {
      this.props.getAuth({});
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getAuth(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          title="admin auth"
          wrapClassName="vertical-center-modal"
          visible={this.props.clinicId === 0}
          closable={false}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit} className="passport-form">
            <div className="logo">
              <img src="http://www.medlinker.com/dist/sitenew/img/common/logo_2x.png" alt="AI演示" />
            </div>
            <FormItem>
              {getFieldDecorator('authUserName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('authPasswd', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('authToken', {
                rules: [{ required: true, message: 'Please input code!' }],
              })(
                <div className="code" style={code}>
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="code" placeholder="code" />
                  <img src="http://106.14.181.73:8080/token" alt="验证码" />
                </div>,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('rememberP', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="/">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ display: 'block' }}>
                Log in
              </Button>
              Or <a href="/">register now!</a>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapState = state => ({
  clinicId: state.clinicId,
});

const mapDispatch = ({ clinicId: { getAuth } }) => ({
  getAuth: payload => getAuth(payload),
});

const PassPortExp = Form.create()(PassPort);

export default connect(mapState, mapDispatch)(PassPortExp);
