import React from "react";
import Input from "../../custom/Input";
import { ReactComponent as Contact } from "../../../assets/icons/contact.svg";
import { FaSmileWink, FaPaypal } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  outline: none;
  border-radius: 0.2em;
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.text};
  border: none;
  font-size: 1.2em;
  font-weight: 600;
  min-width: 10rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
`;

export default ({ projects }) => {
  return (
    <>
      <div className="container-fluid px-4 mb-5">
        <div className="contact-section" id="contact-section">
          <h3 className="text-center my-5">Contact</h3>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <form className="contact-form">
                <h4>
                  Send A Message i don't bite LOL! <FaSmileWink />
                </h4>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Full Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    callback={(val) => console.log(val)}
                  />
                  <span className="error"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    id="email"
                    className="form-control"
                    callback={(val) => console.log(val)}
                  />
                  <span className="error"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                  <span className="error"></span>
                </div>
                <Button>Send</Button>
                <div className="my-3 donate">
                  <h6>
                    Buy Me A Cup of coffee <FaPaypal />
                  </h6>
                </div>
              </form>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <Contact style={{ width: "300px", height: "200px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
