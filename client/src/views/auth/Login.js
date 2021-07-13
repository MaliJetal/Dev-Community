import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import google_svg from '../../assets/img/google.svg';
import github_svg from '../../assets/img/github.svg';

class Login extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="Login">
        <div className = "container">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <h6>
                      Sign in with
                    </h6>
                  </div>
                  <div>
                    <button
                      type="button"
                    >
                      <img
                        src={github_svg}
                        alt="..."
                        className="w-5 mr-1"
                      />
                      Github
                    </button>
                    <button
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={google_svg}
                      />
                      Google
                    </button>
                  </div>
                  <hr/>
                </div>
                <div>
                  <div>
                    <small>Or Sign in with Credentails</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                       htmlFor="grid-password">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                       htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                      
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        type="button"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-300"
                  >
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div>
                  <Link to="/auth/register" className="text-gray-300">
                    <small>Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
