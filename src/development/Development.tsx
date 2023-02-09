import { Col, Container, Row } from "react-bootstrap";

const Development = () => (
  <div className="development">
    <img src="./target2.png" alt="Цель" className="target2" />
    <img
      className="gradientLine2"
      src="./gradientLine2.png"
      alt="Градиентная линия 2"
    />
    <Container>
      <Row>
        <Col className="text-end">
          <img src="./target1.png" alt="Цель" className="target1" />
          <img
            src="./groupWork.png"
            alt="Развитие детско-юношеского предпринимательства"
          />
        </Col>
        <Col>
          <h1
            className="development-text"
            style={{ fontSize: "79px", paddingTop: "112px" }}
          >
            РАЗВИТИЕ
          </h1>
          <div className="development-text">детско-юношеского</div>
          <div className="development-text">предпринимательства</div>
          <div className="development-description">
            Мы создаем эффективную экосистему детско-юношеского
            предпринимательства, создавая условия для поддержки, развития и
            масштабирования проектов, сопровождаем наставников, разрабатываем
            методологии развития, выходим с законодательными инициативами о
            развитии детско-юношеского предпринимательства. Именно такая
            всесторонняя работа приносит результат.
          </div>
          <div className="development-such">
            Именно <span>такая</span> всесторонняя работа приносит результат.
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Development;
