import { Col, Container, Row } from "react-bootstrap";

const Tasks = () => {
  const text = [
    {
      title: "Экосистема уполномоченных по защите бизнеса:",
      desc: "Через систему уполномоченных реализуются инициативы на региональных уровнях.",
    },
    {
      title: "Законодательные инициативы:",
      desc: "Законодательная поддержка инициатив развития детско-юношеского предпринимательства в Государственной Думе и Совете Российской Федерации.",
    },
    {
      title: " Развитие регионов:",
      desc: "Региональные отделения по поддержке и развитию кластеров детско-юношеского предпринимательства создают потенциал развития региона.",
    },
    {
      title: "Продвижение:",
      desc: "Продвижение проектов через профессиональны сообщества и ассоциации, торгово-промышленные палаты, центры «Мой бизнес». Участие проектов юных предпринимателей в ключевых деловых событиях: ПМЭФ, МЭФ, ВЭФ, РИФ и т.д.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="colorfulHeader">ЗАДАЧИ</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="8">
          {text.map(({ title, desc }) => (
            <Row key={title} className='tasks-row'>
              <Col xs="1">
                <div className="circle" />
              </Col>
              <Col className="tasks-text">
                <div>{title}</div>
                <p>{desc}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Tasks;
