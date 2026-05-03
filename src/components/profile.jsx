import netflixLogo from "../assets/netflix_logo.png";
import avatarLogo from "../assets/avatar.png";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Form,
  Image,
} from "react-bootstrap";

const ProfilePage = () => {
  const headerStyle = {
    background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, #212529)",
    padding: "10px",
  };

  return (
    <>
      <header style={headerStyle}>
        <img src={netflixLogo} alt="logo" style={{ width: "100px" }} />
      </header>
      <main className="bg-dark min-vh-100 py-5">
        <Container>
          <Row>
            <Col xs={11} sm={10} md={8} lg={6} className="mx-auto">
              <h1 className="text-white display-4 border-bottom border-secondary pb-2 mb-4">
                Edit Profile
              </h1>

              <Container fluid className="border-bottom border-secondary pb-4">
                <Row>
                  <Col xs={3} className="p-0">
                    <div className="position-relative">
                      <Image
                        src={avatarLogo}
                        alt="Profilo"
                        className="w-100 rounded"
                      />
                      <i className="bi bi-pencil-fill position-absolute start-0 bottom-0 m-2 bg-black text-light rounded-circle border border-1 border-light px-1"></i>
                    </div>
                  </Col>

                  <Col xs={9}>
                    <p className="text-white bg-secondary px-2 py-1 d-inline-block">
                      Strive Student
                    </p>

                    <p className="text-white-50 mt-3 mb-1">Language:</p>
                    <Dropdown className="mb-4">
                      <Dropdown.Toggle
                        variant="black"
                        className="text-white border border-white rounded-0 py-1 px-3 d-flex align-items-center justify-content-between"
                        style={{ minWidth: "120px" }}
                      >
                        English
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/it">Italiano</Dropdown.Item>
                        <Dropdown.Item href="#/fr">Francese</Dropdown.Item>
                        <Dropdown.Item href="#/cn">Cinese</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <hr className="text-secondary" />

                    <p className="text-white-50 mt-3">Maturity Settings:</p>
                    <p className="text-white bg-secondary mt-2 px-2 py-1 d-inline-block fw-bold">
                      ALL MATURITY RATINGS
                    </p>
                    <p className="text-white small mb-3">
                      Show titles of all maturity ratings for this profile
                    </p>

                    <div className="border-bottom border-secondary pb-4">
                      <Button
                        variant="outline-secondary"
                        className="rounded-0 px-4 text-secondary"
                      >
                        EDIT
                      </Button>
                    </div>

                    <p className="text-white-50 mt-4">Autoplay Controls</p>

                    <Form.Check
                      type="checkbox"
                      id="check1"
                      className="text-light mb-2 d-flex align-items-center"
                    >
                      <Form.Check.Input
                        defaultChecked
                        className="bg-transparent rounded-0 border-secondary p-3 shadow-none me-3"
                      />
                      <Form.Check.Label>
                        Autoplay next episode in a series on all devices.
                      </Form.Check.Label>
                    </Form.Check>

                    <Form.Check
                      type="checkbox"
                      id="check2"
                      className="text-light mb-3 d-flex align-items-center"
                    >
                      <Form.Check.Input
                        defaultChecked
                        className="bg-transparent rounded-0 border-secondary p-3 shadow-none me-3"
                      />
                      <Form.Check.Label>
                        Autoplay previews while browsing on all devices.
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                </Row>
              </Container>

              <div className="d-flex gap-2 my-4 justify-content-between">
                <Button variant="light" className="rounded-0 fw-bold px-5">
                  SAVE
                </Button>

                <Button
                  variant="outline-secondary"
                  className="rounded-0 px-5 text-white"
                >
                  CANCEL
                </Button>

                <Button
                  variant="outline-secondary"
                  className="rounded-0 px-5 text-white"
                >
                  DELETE PROFILE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default ProfilePage;
