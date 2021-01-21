import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="Login">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        src={require("assets/img/github.svg")}
                        alt="..."
                        className="w-5 mr-1"
                      />
                      Github
                    </button>
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/google.svg")}
                      />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
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