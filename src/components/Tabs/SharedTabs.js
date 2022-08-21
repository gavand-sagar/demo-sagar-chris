import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./tabs.css";

const SharedTabs = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">FinTech</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Agritech</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">LegalTech</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">EdTech</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p className="bodytext">
                This mobile app was developed to assist with graduate
                recruitment programs. It organises and delivers information from
                candidates and allows for mentorship opportunities for graduates
                as well as a simple way to join competitions.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p className="bodytext">
                Our clients were in need of a mobile application that enabled
                farmers to find, rent and pay for specialised equipment. We
                integrated a payment solution to ease cash flow challenges.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <p className="bodytext">
                This piece of software was developed to automate the review of
                agreements. The software now aids in managing and compiling
                internal information in a sufficient way, that allows all data
                to be organised and accounted for.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <p className="bodytext">
                This Progressive Web App helps with data-capturing in the
                education sector. The request was to build software that is able
                to capture, consolidate and report data, to be shared with
                external stakeholders to facilitate an effective decision-making
                environment to accurately allocate funds.
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default SharedTabs;
