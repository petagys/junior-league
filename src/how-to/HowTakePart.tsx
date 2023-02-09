import { Col, Container, Row } from "react-bootstrap";

const HowTakePart = () => (
  <Container>
    <h1 id="howTakePart">КАК ПРИНЯТЬ УЧАСТИЕ?</h1>
    <Row>
      <Col className="d-flex justify-content-center">
        <img src="./1.png" alt="1" />
      </Col>
      <Col className="d-flex justify-content-center">
        <img src="./2.png" alt="2" />
      </Col>
      <Col className="d-flex justify-content-center">
        <img src="./3.png" alt="3" />
      </Col>
    </Row>
    <Row>
      <Col className="d-flex justify-content-center align-items-center text-center step">
        Регистрируйся на сайте
      </Col>
      <Col className="d-flex justify-content-center align-items-center text-center step">
        <div>
          <div>Знакомься с форматами</div>
          <div>Изучи проекты, мероприятия и найди команду в своём регионе!</div>
        </div>
      </Col>
      <Col className="d-flex justify-content-center align-items-center text-center step">
        <div>
          <div>Следи за активностями...</div>
          <div>Выбирай наиболее интересные и принимай участие!</div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HowTakePart;
