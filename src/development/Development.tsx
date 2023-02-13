import { Col, Container, Row } from "react-bootstrap";

const Development = () => (
  <div className="development">
    <img src="./target2.png" alt="Цель" className="target2 desktopOnly" />
    <img
      className="gradientLine2"
      src="./gradientLine2.png"
      alt="Градиентная линия 2"
    />
    <Container>
      <Row>
        <Col className="d-flex justify-content-end position-relative d-lg-none ">
          <div className="image-block-mob">
            <img
              style={{ bottom: "0" }}
              className="target-mob"
              src="./target-1-mob.png"
              alt="Цель"
            />
            <img className="target-mob" src="./target-2-mob.png" alt="Цель" />
          </div>
          <div className="groupWorkMob">
            <h1 className="development-text" style={{ fontSize: "44px" }}>
              РАЗВИТИЕ
            </h1>
            <div className="development-text">детско-юношеского</div>
            <div className="development-text" style={{ marginBottom: "28px" }}>
              предпринимательства
            </div>
            <img
              width="100%"
              style={{ borderRadius: "40px" }}
              src="./groupWork-mob.png"
              alt="Развитие детско-юношеского предпринимательства"
            />
            <img src="./arrow3-mob.png" className="arr3-mob" alt="arrow3" />
          </div>
        </Col>
        <Col className="text-end desktopOnly position-relative">
          <img
            id="arrow3"
            className="desktopOnly"
            src="./arrow3.png"
            alt="Лига Юниор"
          />
          <img
            id="arrow4"
            className="desktopOnly"
            src="./arrow4.png"
            alt="Лига Юниор"
          />
          <img src="./target1.png" alt="Цель" className="target1" />
          <img
            src="./groupWork.png"
            alt="Развитие детско-юношеского предпринимательства"
          />
        </Col>
        <Col lg="6" sx="12">
          <h1
            className="development-text desktopOnly"
            style={{ fontSize: "79px", paddingTop: "112px" }}
          >
            РАЗВИТИЕ
          </h1>
          <div className="development-text desktopOnly">детско-юношеского</div>
          <div className="development-text desktopOnly">
            предпринимательства
          </div>
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
