import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import SharedButton2 from "../../components/button/SharedButton2";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SharedCarousel from "../../components/carousel/SharedCarousel";
import "../../components/form/form.css";
import { useForm } from "react-hook-form";

const NewProject = () => {
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
    console.log(data);
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
      <Header />
      <Container>
        {sent && (
          <div className="formsubmitted">Form submitted successfully! </div>
        )}
        <Row className="spacing">
          <Col>
            <div>
              <p className="heading">Start a project</p>
              <p className="bodytext">
                Interested in bespoke software? Got an exciting mobile or web
                app project? Need software support? Or just looking for
                outsourced software?<br></br>
                <br></br>
                Fill out the form below and a dedicated client manager will be
                in touch soon.
              </p>
            </div>
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

              <Form.Group className="mb-3 forminput" controlId="formGridEmail">
                <Form.Label>
                  Work Email <span className="requiredspan">*</span>
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
                  Contact Number<span className="requiredspan">*</span>
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
                  Tell us a bit more about your project
                  <span className="requiredspan">*</span>
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
          <Col lg={5} className="colcolor bodytext ">
            <div>
              <p className="h4">Next steps?</p>
              <div>
                <p>
                  <RiNumber1 className="imgfact2" />A member of our sales team
                  will reach out within one day to discuss more details
                </p>
              </div>
              <div>
                <p>
                  <RiNumber2 className="imgfact2" />
                  We arrange a 30 minute SovTech explained session to better
                  understand your project and business
                </p>
              </div>
              <div>
                <p>
                  <RiNumber3 className="imgfact2" />
                  Receive a complimentary solution estimation and plan
                </p>
              </div>

              <p>Not ready to start a projet yet? No problem</p>
              <p>
                <a href="#">Contact us</a> and lets chat about how we can help
                with your bespoke software needs
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <SharedCarousel />

      <Footer />
    </>
  );
};

export default NewProject;
