import { Button, Col, Container, Row } from 'react-bootstrap';

const Main = () => (
  <>
    <Container>
      <Row>
        <Col lg="4">
          <Row className="nameRow">
            <Col xs="6" lg="12">
              <h1 className="name">ЛИГА ЮНИОР</h1>
            </Col>
            <Col xs="6" className="d-block d-lg-none">
              <img className="bird-mob" width="100%" src="./bird-mob.png" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="desc">
                Всероссийское движение детско-юношеского предпринимательства
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-lg-block">
          <img src="./bird.png" />
        </Col>
      </Row>
    </Container>
    <div className="btnRow">
      <Container>
        <Row>
          <Col className='d-flex'>
            <Button className="btn-common tellAbout" variant="light">
              Расскажи нам о своём проекте
            </Button>
            <Button className="btn-common findTeam">
              Найди команду в своём регионе
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Main;