import { Button, Dropdown } from "react-bootstrap";

const HeroNetflix = () => {
  return (
    <div className="d-flex mt-4 justify-content-between px-3">
      <div className="d-flex gap-5 align-items-center justify-content-between flex-grow-1 justify-content-sm-start">
        <h1 className="text-light">TV Shows</h1>
        <div class="dropdown">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-generi"
              className="btn bg-black text-light rounded-0 border-1 border-light bg-transparent d-flex align-items-center"
            >
              <span className="me-4">Generi</span>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/profile">Azione</Dropdown.Item>
              <Dropdown.Item href="#/settings">Avventura</Dropdown.Item>
              <Dropdown.Item href="#/logout">Fantasy</Dropdown.Item>
              <Dropdown.Item href="#/logout">Horror</Dropdown.Item>
              <Dropdown.Item href="#/logout">Musical</Dropdown.Item>
              <Dropdown.Item href="#/logout">Animazione</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-none d-sm-flex align-items-center">
        <Button
          className="btn text-light rounded-0 border-1 border-light mx-0 bg-transparent"
          type="button"
          aria-expanded="false"
        >
          <i className="bi bi-list-nested"></i>
        </Button>
        <Button
          className="btn text-light rounded-0 border-1 border-light mx-0 bg-transparent"
          type="button"
          aria-expanded="false"
        >
          <i className="bi bi-grid-fill"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroNetflix;
