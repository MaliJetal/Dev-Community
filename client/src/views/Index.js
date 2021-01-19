import React, { Component } from 'react';

//components
import IndexNavbar from '../components/navbars/IndexNavbar';
import frntImg from '../assets/img/pattern_react.png';
import Footer from '../components/footers/Footer';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <IndexNavbar fixed />
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-gray-700">
                  Dev-Community - Engage, Explore and Code.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Dev-Community is powerful platform for developers, programmers and enthusiast learners, help them to understand the issues at hand, encourage productive actions, and demonstrate how those actions are creating positive outcomes.{" "}
                  <a
                    href="https://tailwindcss.com/?ref=creativetim"
                    className="text-gray-700"
                    target="_blank"
                  >
                    Dev-Community
                  </a>
                  . Help and earn points.
                </p>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-14 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-12/14 max-h-860px"
            src={frntImg}
            alt="..."
          />
        </section>
        <Footer fixed />
      </div>
    );
  }
}

export default Index;
