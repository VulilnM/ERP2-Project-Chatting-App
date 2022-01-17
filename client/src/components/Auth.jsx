import React, { useState } from "react";
import Cookies from "universal-cookie";
import Axios from "axios";
import signInImage from "../assets/signup.jpg";

const Auth = () => {
  //first, display the singin
  const [isSignup, setisSignup] = useState(false);

  const handleChange = () => {};

  const switchMode = () => {
      //change the state depending on previous state from useState (true -> false and vice versa)
      setisSignup(prevIsSignup => !prevIsSignup);
  };

  return (
    <div className="auth__from-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={() => {}}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName"> Full Name </label>
                <input
                  name="FullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username"> Username </label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber"> Phone Number </label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL"> Avatar URL </label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password"> Password </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign in" : "Sign up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
