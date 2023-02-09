import { Col, Container, Row } from "react-bootstrap";

const Events = () => (
  <Container>
    <Row>
      <Col className="d-flex justify-content-center">
        <h1 className="colorfulHeader">Мероприятия</h1>
      </Col>
    </Row>
    <Row className="justify-content-md-center ">
      <Col lg="8">
        <Row className="events-row align-items-center">
          <Col className="events ">Февраль</Col>
          <Col className="events events-place">
            Митап.Юниор
            <br />
            г.Нижний-Новгород
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col lg="8">
        <Row className="events-row align-items-center">
          <Col className="events events-month">Март</Col>
          <Col className="events events-place">
            Международный Митап Space Junior
            <br /> г.Душанбе
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col lg="8">
        <Row className="events-row align-items-center">
          <Col className="events events-month">Июнь</Col>
          <Col className="events events-place">
            Петербургский Международный Экономический Форум
            <br />
            г.Санкт-Петербург
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col lg="8">
        <Row className="events-row align-items-center">
          <Col className="events events-month">Август</Col>
          <Col className="events events-place">
            Митап.Юниор <br />
            г.Якутск
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Events; 