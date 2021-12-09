import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div
        className="col-left"
        style={{
          background: 'url(/assets/images/loginPageImage.png)',
          backgroundSize: 'cover'
        }}
      >
        {/* <img src="/assets/images/loginPageImage.png" alt="" /> */}
      </div>
      <div className="col-right">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
