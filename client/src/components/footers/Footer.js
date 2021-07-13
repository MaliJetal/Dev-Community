import React from 'react';

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div
        >
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
             
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div >
            <div>
              <h4 >Let's keep in touch!</h4>
              <h5 >
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div>
                <button
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                >
                  <i></i>
                </button>
                <button
                  type="button"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
                <button
                 type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.creative-tim.com/presentation?ref=nr-footer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.creative-tim.com?ref=nr-footer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MaliJetal/Dev-Community"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span>
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                       href="https://github.com/MaliJetal/Dev-Community"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                       href="https://creative-tim.com/terms?ref=nr-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                       href="https://creative-tim.com/privacy?ref=nr-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                       href="https://creative-tim.com/contact-us?ref=nr-footer"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr  />
          <div>
            <div >
              <div >
                Copyright © {new Date().getFullYear()} Dev-Community by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                 
                >
                  Dev-Community
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
