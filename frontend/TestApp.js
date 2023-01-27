import React, { Component } from 'react';
import LoginMember from "./src/login/loginComp/LoginMember";

class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {      // 상태 관리
      isLogin: false,	// 로그인 여부
      userData: null,   // 유저 데이터
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  loginHandler() {    // 로그인 성공 시 로그인 상태 true로 변경
    this.setState({
      isLogin: true,
    });
  }

  setUserInfo(object) {    // 로그인 성공 시 user data 수정
    this.setState({ userData: object });
  }

  logoutHandler() {	   // 로그아웃 성공 시 로그인 상태 false로 변경
    this.setState({
      isLogin: false,
    });
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className='App'>
        {isLogin ? (
          <Mypage
            logoutHandler={this.logoutHandler}
            userData={this.state.userData}
          />
        ) : (
          <LoginMember
            loginHandler={this.loginHandler}
            setUserInfo={this.setUserInfo}
          />
        )}
      </div>
    );
  }
}

export default TestApp;
