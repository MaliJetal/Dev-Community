import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import AuthNavbar from '../components/navbars/AuthNavbar';
import FooterSmall from '../components/footers/FooterSmall';
//views
import Login from "../views/auth/Login";
import Register from '../views/auth/Register';
import register_png from '../assets/img/register_bg_2.png';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <main>
          <AuthNavbar transparent />
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
              style={{
                backgroundImage:
                  "url(" + register_png + ")",
              }}
            >
            </div>
            <Switch>
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth/register" exact component={Register} />
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
          </section>
          <FooterSmall absolute />
        </main>
      </div>
    );
  }
}
export default Auth;