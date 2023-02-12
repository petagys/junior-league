import { Col, Container, Row } from "react-bootstrap";

const WhoWe = () => (
  <div className="whoWe-block">
    {/* <div className="lululu" /> */}
    <Container style={{ zIndex: 1, position: "relative" }}>
      <Row>
        <Col xs="6" lg="6">
          <img id="photo1" src="./photo1.png" alt="Фото1" />
          <img id="photoText" src="./text-mob.png" alt="Лига Юниор" />
        </Col>
        <Col
          xs="6"
          className="d-flex align-items-end d-lg-none position-relative"
        >
          <h1 className="whoWEMob">
            <span>КТО</span>
            <span style={{ fontWeight: "500", marginLeft: "12px" }}>МЫ?</span>
          </h1>
          <img
            className="arr1-mob desktopOnly"
            src="./arrow1-mob.png"
            alt="Лига Юниор"
          />
        </Col>
        <Col className="d-none d-lg-flex align-items-end">
          <div id="desc">
            <b>Лига Юниор</b> – сообщество юных лидеров, которые способны
            воплощать в жизнь идеи и дух предпринимательства, объединять,
            вдохновлять, мотивировать других в движении к новым свершениями. От
            их неиссякаемой энергии, творческой вовлеченности и огромного
            желания зависит наше общее будущее. От внедрения и развития идей и
            проектов – экономический прогресс России.
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-block d-lg-none">
          <div id="descMob">
            <b>Лига Юниор</b> – сообщество юных лидеров, которые способны
            воплощать в жизнь идеи и дух предпринимательства, объединять,
            вдохновлять, мотивировать других в движении к новым свершениями. От
            их неиссякаемой энергии, творческой вовлеченности и огромного
            желания зависит наше общее будущее. От внедрения и развития идей и
            проектов – экономический прогресс России.
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default WhoWe;
