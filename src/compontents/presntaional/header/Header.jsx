import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { postLanding } from '../../../actions/landingAction';
const logo = require('./images/logo.svg');

class Header extends React.Component {
  onClicksigNoutToken() {
    this.props.sigNoutToken({
      accesstoken: '',
    })
  }

  render() {
    return (
      <div className="head">
        <div className="container container-w">
          <a className="login" href=""><img src={logo} /></a>
          <form className="search">
            <input type="text" name="search" />
          </form>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/getstart">新手入门</Link></li>
            <li><Link to="/api">API</Link></li>
            <li><Link to="/themes">关于</Link></li>
            {
              this.props.token === '' ?
              <li><Link to="/landing">注册</Link></li>
              :
              <li><Link to="/landing">设置</Link></li>
            }
            {
              this.props.token === '' ?
              <li><Link to="/landing">登录</Link></li>
              :
              <li><Link onClick={this.onClicksigNoutToken.bind(this)} to="/landing">退出</Link></li>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    token: state.accesstoken,
  }),
  dispatch => ({
    sigNoutToken: bindActionCreators(postLanding, dispatch),
  })
)(Header)
