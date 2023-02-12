import { Slide } from "react-slideshow-image";
import { Col, Container, Row } from "react-bootstrap";
import "react-slideshow-image/dist/styles.css";

const Founders = () => {
  const responsiveSettings = [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
  const slideImages = [
    {
      url: "./logos/lc.jpg",
      caption: 'Международный фонд \n"Живая классика"',
    },
    {
      url: "./logos/fsop.jpeg",
      caption: "Физкультурно спортивное общество Россия",
    },
    {
      url: "./logos/osstro.png",
      caption: "Агентство Osstro",
    },
    {
      url: "./logos/fsi.jpg",
      caption: "Фонд социальных инвестиций",
    },
  ];
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="colorfulHeader" style={{ marginTop: "56px" }}>
            СОУЧЕРЕДИТЕЛИ
          </h1>
        </Col>
      </Row>
      <Slide
        duration={5000}
        transitionDuration={500}
        infinite
        responsive={responsiveSettings}
        slidesToShow={1}
        indicators
        arrows={false}
      >
        {slideImages.map(({ url, caption }) => (
          <div className="each-slide" key={caption}>
            <div className="slide-image-block">
              <img className="slide-image" src={url} alt={caption} />
            </div>
            <div className="slide-text">{caption}</div>
          </div>
        ))}
      </Slide>
    </Container>
  );
};

export default Founders;
