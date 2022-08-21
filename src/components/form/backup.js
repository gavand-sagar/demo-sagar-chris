import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import SharedButton from "../button/SharedButton";
import Container from "react-bootstrap/Container";
import "./form.css";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const SharedForm = () => {
  const [form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      name: name,
      surname: surname,
      company: company,
      email: email,
      phonenumber: phonenumber,
      message: message,
    };

    fetch("http://localhost:5000/contact", {
      body: JSON.stringify(details),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setForm(response);
      });
  };

  return (
    <>
      <Container>
        <Row className="formstyle">
          <Col>
            <Form>
              <Form.Group
                as={Col}
                controlId="formGridName"
                className="forminput"
              >
                <Form.Label>
                  Name<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridSurname"
                className="forminput"
              >
                <Form.Label>
                  Surname<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 forminput" controlId="formGridEmail">
                <Form.Label>
                  Email Address<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 forminput" controlId="formGridNumber">
                <Form.Label>
                  Mobile Number<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your mobile number"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 forminput"
                controlId="formGridCompany"
              >
                <Form.Label>
                  Company Name<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  How can we help you?<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="forminput"
                />
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I accept the privacy policy"
                />
              </Form.Group>

              <SharedButton
                label="Submit"
                style="buttonstyle"
                type="submit"
                onClick={handleSubmit}
              />
            </Form>
          </Col>
          <Col lg={5} className="colcolor bodytext">
            <div>
              <p className="h4">Next steps?</p>
              <div>
                <ul>
                  <li>
                    A member of our sales team will reach out to discuss more
                    details
                  </li>
                  <li>
                    We arrange a 30 minute SovTech explained session to better
                    understand your project and business
                  </li>
                  <li>
                    Receive a complimentary solution estimation and project plan
                  </li>
                </ul>
              </div>
              <p>Need help?</p>
              <p>Send us a message or get in touch by contacting us below.</p>
              <p> info@alppoint.com</p>
              <p>+1 587 222 9845</p>

              <div className="mt-5">
                <p className="h4">Connect with us on social</p>
                <FaFacebookSquare className="iconstyle" />
                <FaLinkedin className="iconstyle" />
                <FaInstagramSquare className="iconstyle" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SharedForm;
