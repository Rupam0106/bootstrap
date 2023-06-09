import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section classNameName="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="row p-4 md-5">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="#" method="POST" className="mb-2">
            <div className="row ">
              <div className="col-md-6 p-2">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 p-2">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 p-2">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 p-2">
                <div className="md-form">
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <Link
              className="btn btn-primary"
            >
              Send
            </Link>
          </div>
          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Mohali, Panjab</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+91 8460980143</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>rupam.gupta@rudrainnovative.com</p>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Contact;
