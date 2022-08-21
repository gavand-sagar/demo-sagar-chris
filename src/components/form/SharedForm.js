import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import SharedButton2 from "../button/SharedButton2";
import Container from "react-bootstrap/Container";
import "./form.css";
import { useForm } from "react-hook-form";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const SharedForm = () => {
  // const [form, setForm] = useState([]);
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phonenumber, setPhoneNumber] = useState("");
  // const [company, setCompany] = useState("");
  // const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:3001/contact/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setSent(true);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        surname: "",
        company: "",
        phonenumber: "",
        message: "",
        email: "",
      });
    }
  }, [formState, reset]);

  return (
    <>
      <Container>
        {sent && (
          <div className="formsubmitted">Form submitted successfully! </div>
        )}
        <Row className="formstyle">
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                as={Col}
                controlId="formGridName"
                className="forminput"
              >
                <Form.Label>
                  First Name<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  {...register("name", { required: true })}
                  placeholder="First Name"
                />
                {errors.name && (
                  <span className="requiredspan">This field is required</span>
                )}
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
                  {...register("surname", { required: true })}
                  placeholder="Last Name"
                />
                {errors.surname && (
                  <span className="requiredspan">This field is required</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3 forminput" controlId="formGridEmail">
                <Form.Label>
                  Email Address<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="requiredspan">
                    This field is required, please enter a valid email address
                  </span>
                )}
              </Form.Group>
              <Form.Group className="mb-3 forminput" controlId="formGridNumber">
                <Form.Label>
                  Mobile Number<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  {...register("phonenumber", { required: true })}
                  placeholder="Enter your contact number"
                />
                {errors.phonenumber && (
                  <span className="requiredspan">This field is required</span>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3 forminput"
                controlId="formGridCompany"
              >
                <Form.Label>
                  Company Name<span className="requiredspan">*</span>
                </Form.Label>
                <Form.Control
                  {...register("company", { required: true })}
                  placeholder="Company Name"
                />
                {errors.company && (
                  <span className="requiredspan">This field is required</span>
                )}
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
                  className="forminput"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="requiredspan">This field is required</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I accept the privacy policy"
                />
              </Form.Group>

              <SharedButton2
                labelq="Submit"
                styleq="buttonstyle"
                type="submit"
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

                <a href="https://www.facebook.com/alppointtechnologies">
                  <FaFacebookSquare className="iconstyle" />
                </a>
                <a href="https://www.linkedin.com/company/alppoint/">
                  <FaLinkedin className="iconstyle" />
                </a>
                <a href="https://www.instagram.com/alppointtechnologies/">
                  <FaInstagramSquare className="iconstyle" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SharedForm;
