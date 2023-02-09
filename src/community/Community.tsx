import { Col, Container, Row } from "react-bootstrap";

const Community = () => (
  <Container>
    <Row className="justify-content-end">
      <Col lg="5">
        <div className="find">найди сообщество</div>
        <div className="find" style={{ marginBottom: "32px" }}>
          в своём регионе
        </div>
      </Col>
    </Row>
    <Row>
      <Col className="d-flex justify-content-center">
        <img src="./Ru.png" id='ruMap' alt="Russia/Россия" />
      </Col>
    </Row>
  </Container>
);

export default Community;