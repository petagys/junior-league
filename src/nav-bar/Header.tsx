import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => (
    <Navbar className='nav' bg="wight" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./logo.svg" id="logo" alt="Лига Юниор" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav navbarScroll className="me-auto">
            <Nav.Link className="navLink" href="#events">
              Мероприятия
            </Nav.Link>
            <Nav.Link className="navLink" href="./doc1.docx">
              Положение
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);

export default Header;