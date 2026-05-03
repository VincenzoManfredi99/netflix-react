import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Image, // Fondamentale aggiungerlo qui
} from "react-bootstrap";
import netflixLogo from "../assets/netflix_logo.png";
import accountLogo from "../assets/avatar.png";

function HeaderNetflix() {
  return (
    <Navbar expand="lg" className="bg-transparent" data-bs-theme="dark">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home">
          <img src={netflixLogo} alt="logo" style={{ width: "100px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Link principali a sinistra */}
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          {/* Sezione icone e profilo a destra */}
          <div className="d-flex align-items-center gap-3">
            <i
              className="bi bi-search text-light"
              style={{ cursor: "pointer" }}
            ></i>
            <span
              className="text-light fw-bold"
              style={{ fontSize: "0.8rem", cursor: "pointer" }}
            >
              KIDS
            </span>
            <i
              className="bi bi-bell-fill text-light"
              style={{ cursor: "pointer" }}
            ></i>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                id="dropdown-profile"
                className="p-0 border-0 no-caret"
              >
                <Image src={accountLogo} width="30" height="30" rounded />
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/profile">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Account</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout">Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNetflix;
