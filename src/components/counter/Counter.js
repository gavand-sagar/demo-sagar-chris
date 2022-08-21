import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";
import "../../pages/services/services.css";

function Counter({ label, title, style1 }) {
  return (
    <Row>
      <div>
        <Col>
          <div>
            <p>
              <CountUp end={label} className={style1} />
            </p>
            <p className={style1}>{title}</p>
          </div>
        </Col>
      </div>
    </Row>
  );
}

export default Counter;
