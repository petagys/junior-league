import { Button, Col, Container, Row } from 'react-bootstrap';

const Main = () => (
  <>
    <Container>
      <Row>
        <Col lg="4">
          <h1 className="name">ЛИГА ЮНИОР</h1>
          <div className="desc">
            Всероссийское движение детско-юношеского предпринимательства
          </div>
        </Col>
        <Col>
          <img src="./bird.svg" />
        </Col>
      </Row>
    </Container>
    <div className="btnRow">
      <Container>
        <Row>
          <Button className="btn-common tellAbout" variant="light">
            Расскажи нам о своём проекте
          </Button>
          <Button className="btn-common findTeam">
            Найди команду в своём регионе
          </Button>
        </Row>
      </Container>
    </div>
  </>
);

export default Main;