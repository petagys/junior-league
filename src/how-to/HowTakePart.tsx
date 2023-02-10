import { Col, Container, Row } from "react-bootstrap";

const HowTakePart = () => (
  <Container>
    <h1 id="howTakePart">КАК ПРИНЯТЬ УЧАСТИЕ?</h1>
    <Row>
      <Col className="d-flex justify-content-center">
        <div className="countsMob">
          <span style={{ color: "#F38B6D" }}>1</span>
        </div>
        <img className="countsDesktop" src="./1.png" alt="1" />
      </Col>
      <Col className="d-flex justify-content-center">
        <div className="countsMob">
          <span style={{ color: "#BC478D" }}>2</span>
        </div>
        <img className="countsDesktop" src="./2.png" alt="2" />
      </Col>
      <Col className="d-flex justify-content-center">
        <div className="countsMob">
          <span style={{ color: "#954ACA" }}>3</span>
        </div>
        <img className="countsDesktop" src="./3.png" alt="3" />
      </Col>
    </Row>
    <Row>
      <Col xs="4" className="d-flex justify-content-center text-center step">
        Регистрируйся на сайте
      </Col>
      <Col xs="4" className="d-flex justify-content-center text-center step">
        <div>
          <div>Знакомься с форматами</div>
          <div>Изучи проекты, мероприятия и найди команду в своём регионе!</div>
        </div>
      </Col>
      <Col xs="4" className="d-flex justify-content-center text-center step">
        <div>
          <div>Следи за активностями...</div>
          <div>Выбирай наиболее интересные и принимай участие!</div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HowTakePart;
