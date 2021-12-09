import React from 'react';
import { Button } from './Button';
import FormInputGroup from './FormInputGroup';

function LoginForm() {
  return (
    <div className="form-parent">
      <form>
        <img src="/assets/images/twine-logo.png" alt="" className="form-logo" />

        <Button
          text="Login with google"
          icon="/assets/images/google-logo.svg"
          width="100%"
        />
        <Button
          color="#3B5998"
          textColor="#fff"
          text="Login with facebook"
          icon="/assets/images/facebook-logo.svg"
          width="100%"
        />

        <div className="or">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <div className="form-group">
          <FormInputGroup type="text" name="name" placeholder="Full Name" />
          <FormInputGroup
            type="password"
            name="password"
            placeholder="Password"
          />

          <p>
            Forgot password? <a href="#">Click here!</a>
          </p>
        </div>

        <Button
          type="submit"
          color="#53A9E7"
          textColor="#fff"
          text="Login"
          width="100%"
        />
      </form>

      <div className="patterns">
        <img src="/assets/images/patterns.svg" alt="" id="pattern-1" />
        <img src="/assets/images/patterns.svg" alt="" id="pattern-2" />
      </div>
    </div>
  );
}

export default LoginForm;
