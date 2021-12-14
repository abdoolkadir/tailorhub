import axios from 'axios';
import React, { useState } from 'react';
import FormInputGroup from '../components/FormInputGroup';

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      username,
      password
    });

    if ('accessToken' in response) {
      sessionStorage.setItem('accessToken', response['accessToken']);
      sessionStorage.setItem('user', JSON.stringify(response['user']));

      // props.history.push('/dashboard');
      window.location.href = '/dashboard';
    } else {
      if (response.status === 401 || response.status === 400) {
        setError('Something went wrong, please try again.');
        console.log(response.status);
      } else {
        setError('Username or password invalid');
      }
    }

    // axios
    //   .post('https://www.mecallapi.com/api/login', {
    //     username,
    //     password
    //   })
    //   .then((response) => {
    //     if ('accessToken' in response) {
    //       sessionStorage.setItem('accessToken', response['accessToken']);
    //       sessionStorage.setItem('user', JSON.stringify(response['user']));

    //       // props.history.push('/dashboard');
    //       window.location.href = '/dashboard';
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 401 || error.response.status === 400) {
    //       // setError(error.response.data.message);
    //       setError('Username or password invalid');
    //     } else {
    //       setError('Something went wrong, please try again.');
    //     }
    //   });
  };

  return (
    <div className="login-page">
      <div
        className="col-left"
        style={{
          background: 'url(/assets/images/loginPageImage.png)',
          backgroundSize: 'cover'
        }}
      ></div>

      <div className="col-right">
        <div className="container">
          <div className="form-parent">
            <form onSubmit={handleSubmit}>
              <img
                src="/assets/images/twine-logo.png"
                alt="Logo"
                className="form-logo"
              />

              <a href="/" className="btn">
                <img src="/assets/images/google-logo.svg" alt="google" /> Login
                with google
              </a>

              <a
                href="/"
                className="btn"
                style={{ backgroundColor: '#3B5998', color: '#fff' }}
              >
                <img src="/assets/images/facebook-logo.svg" alt="facebook" />{' '}
                Login with facebook
              </a>

              <div className="or">
                <span></span>
                <p>OR</p>
                <span></span>
              </div>

              <div className="form-group">
                <FormInputGroup
                  value={username}
                  type="email"
                  name="name"
                  placeholder="Enter Email"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <FormInputGroup
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                  <div className="error" style={{ color: 'red' }}>
                    {error}
                  </div>
                )}

                <p>
                  Forgot password? <a href="/">Click here!</a>
                </p>
              </div>

              <input
                className="btn"
                type="submit"
                value="Login"
                style={{
                  backgroundColor: '#53A9E7',
                  color: '#fff',
                  width: '100%'
                }}
              />
            </form>

            <p className="create-account-text">
              Don't have an account? <a href="/">Create an account here</a>
            </p>

            <div className="patterns">
              <img src="/assets/images/patterns.svg" alt="" id="pattern-1" />
              <img src="/assets/images/patterns.svg" alt="" id="pattern-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
