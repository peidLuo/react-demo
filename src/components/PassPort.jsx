import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PassPort extends Component {
  static propTypes = {
    clinicId: PropTypes.number.isRequired,
    getClinicId: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { user: '', pwd: '' };
  }
  onUserChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  }
  onPwdChange = (e) => {
    this.setState({
      pwd: e.target.value,
    });
  }
  handleSubmit = () => {
    this.setState({
      user: 'ff',
    });
    this.props.getClinicId();
  }
  render() {
    return (
      <div>
        <form>
          <input name="user" value={this.state.user} onChange={e => this.onUserChange(e)} />
          <input name="pwd" value={this.state.pwd} onChange={e => this.onPwdChange(e)} />
          <img src="http://106.14.181.73:8080/token" alt="验证码" />
          <input type="button" onClick={this.handleSubmit} value="提交" />
          {this.props.clinicId}
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  clinicId: state.clinicId,
});

const mapDispatch = ({ clinicId: { getClinicId } }) => ({
  getClinicId: () => getClinicId('/auth.htmls'),
});

export default connect(mapState, mapDispatch)(PassPort);
