import "./styles/estilos.css";
import Container from "react-bootstrap/Container";
import { Navbar, Row } from "react-bootstrap";
import MiApi from "./components/MiApi";
/* import FooterApp from "./components/FooterApp"; */

function App() {
  return (
    <Container>
      <Navbar className="navBar" fixed="top">
        <Container>
          <Navbar.Brand>
            Rick&Morty<span>App</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Row>
        <MiApi />
      </Row>
      
    </Container>
  );
}

export default App;
