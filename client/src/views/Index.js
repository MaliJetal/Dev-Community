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
            <div className="w-full md:w-12/16 lg:w-6/12 xl:w-6/12 px-4">
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
                <div className="mt-12">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started
                  </a>
                  <a
                    href="https://github.com/MaliJetal/Dev-Community"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    target="_blank"
                  >
                    Github Star
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-14 pt-16 pb-64 sm:w-6/12 -mt-48 sm:mt-0 w-12/14 max-h-860px"
            src={frntImg}
            alt="..."
          />

        </section>
        <div className="container opacity-30 pb-64">
          {" "}
        </div>
        <section className="pb-16 bg-gray-300 relative pt-64">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto pt-20">
            <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
              <div className="w-full text-center lg:w-8/12">
                <p className="text-4xl text-center">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p>
                <h3 className="font-semibold text-3xl">
                  Do you love this Starter Kit?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                  Cause if you do, it can be yours now. Hit the buttons below to
                  navigate to get the Free version for your next project. Build a
                  new web app or give an old project a new look!
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started
                  </a>
                  <a
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                    target="_blank"
                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  >
                    <i className="fab fa-github text-lg mr-1"></i>
                    <span>Help With a Star</span>
                  </a>
                </div>
                <div className="text-center mt-16"></div>
              </div>
            </div>
          </div>
        </section>
        <Footer fixed />
      </div>
    );
  }
}

export default Index;
