import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./nav-bar/Header";
import { Container } from "react-bootstrap";
import Main from "./main/Main";
import WhoWe from "./who-we/WhoWe";
import Events from "./Events/Events";
import HowTakePart from "./how-to/HowTakePart";
import Development from "./development/Development";
import Tasks from "./tasks/Tasks";
import Community from "./community/Community";
import Founders from "./founders/Founders";

function App() {
  return (
    <>
      <div className="forGradient">
        <img className="gradient1" src="./gradientLine.png" />
        <Header />
        <Main />
        <Container className="whoWeAre">
          <h1>
            <span id="who">КТО</span>
            <span id="we">МЫ</span>
          </h1>
        </Container>
        <WhoWe />
        <div className="gradient2" />
      </div>
      <div style={{ position: "relative" }}>
        <Events />
        <HowTakePart />
        <div className="gradient3" />
      </div>
      <div style={{ position: "relative" }}>
        <Development />
        <Tasks />
        <div className="gradient4" />
      </div>
      <Community />
      <Founders />
    </>
  );
}

export default App;
