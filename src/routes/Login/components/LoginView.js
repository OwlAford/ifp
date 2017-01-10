import React, { Component, PropTypes } from 'react'
import { message } from 'antd'
import { Link } from 'react-router'
import { API } from 'CONSTANT/globals'
import handleChange from 'UTIL/handleChange'
import 'STYLE/login.scss'
import avatarImg from 'ASSET/img/avatar.png'

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: 'false',
      userName: '',
      pswd: '',
      vcode: ''
    }
    this.handleChange = handleChange.bind(this)
    this.reloadCode = this.reloadCode.bind(this)
  }

  reloadCode() {
    this.props.setSessionID()
  }

  handleFocus(e) {
    e.currentTarget.parentNode.classList.add('focus')
  }

  handleBlur(e) {
    e.currentTarget.parentNode.classList.remove('focus')
  }

  componentWillMount() {
    this.reloadCode()
  }

  handleSubmit() {
    const showHome = () => {
      this.props.router.push(API.CONTENTNAME + '/' + window.globalConfig.HOME_PATH)
    }
    if (this.state.userName.trim() == '') {
      message.error('请输入用户名！')
    } else if (this.state.pswd.trim() == '') {
      message.error('请输入密码！')
    } else if (this.state.vcode.trim() == '') {
      message.error('请输入验证码！')
    } else {
      this.props.validateLogin(this.state, showHome)
    }
  }

  render() {
    const { userName, pswd, vcode } = this.state
    return (
      <div className="Login">
        <div className="loginBox">
          <div className="avatar"><img alt='avatar' src={avatarImg} /></div>
          <div className="input pre-icon">
            <i className="user"></i>
            <input
              placeholder="请输入用户名"
              name="userName"
              onChange={this.handleChange}
              onFocus={(e) => this.handleFocus(e)}
              onBlur={(e) => this.handleBlur(e)}
              ref={node => this.userNameInput = node}
            />
          </div>
          <div className="input pre-icon">
            <i className="pswd"></i>
            <input
              placeholder="请输入密码"
              type="password"
              value={pswd}
              name="pswd"
              onFocus={(e) => this.handleFocus(e)}
              onBlur={(e) => this.handleBlur(e)}
              onChange={this.handleChange}
              ref={node => this.pswdInput = node}
            />
          </div>
          <div className="input vcode">
            <input
              placeholder="请输入验证码"
              value={vcode}
              name="vcode"
              onFocus={(e) => this.handleFocus(e)}
              onBlur={(e) => this.handleBlur(e)}
              onChange={this.handleChange}
            />
            <img 
              src={this.props.vcodeSrc} 
              onClick={this.reloadCode} 
            />
          </div>
          <div className="btn-wrap">
            <button onClick={(e) => this.handleSubmit()}>立即登录</button>
          </div>
        </div>
      </div>
    )
  }

}
