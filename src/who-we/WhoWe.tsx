import { Col, Container, Row } from 'react-bootstrap';

const WhoWe = () => (
  <div
    style={{
      position: "relative",
      marginBottom: '136px'
    }}
  >
    {/* <div className="lululu" /> */}
    <Container style={{ zIndex: 1, position: "relative" }}>
      <Row>
        <Col>
          <img id="photo1" src="./photo1.png" alt="Фото1" />
        </Col>
        <Col className="d-flex align-items-end">
          <span id="desc">
            <b>Лига Юниор</b> – сообщество юных лидеров, которые способны
            воплощать в жизнь идеи и дух предпринимательства, объединять,
            вдохновлять, мотивировать других в движении к новым свершениями. От
            их неиссякаемой энергии, творческой вовлеченности и огромного
            желания зависит наше общее будущее. От внедрения и развития идей и
            проектов – экономический прогресс России.
          </span>
        </Col>
      </Row>
    </Container>
  </div>
);

export default WhoWe;