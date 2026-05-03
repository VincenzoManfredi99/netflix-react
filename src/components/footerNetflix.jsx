import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const FooterNetflix = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex gap-5 mx-3 mb-2">
        <i className="bi bi-facebook fs-4 text-secondary"></i>
        <i className="bi bi-instagram fs-4 text-secondary"></i>
        <i className="bi bi-twitter fs-4 text-secondary"></i>
        <i className="bi bi-youtube fs-4 text-secondary"></i>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <p className="text-secondary">Audio and Subtitles</p>
            <p className="text-secondary">Media Center</p>
            <p className="text-secondary">Privacy</p>
            <p className="text-secondary">Contact Us</p>
            <Button className="btn text-secondary rounded-0 border-1 border-secondary mb-3 bg-transparent">
              Service Code
            </Button>
            <p className="text-secondary text-nowrap">
              Copyright: © 1997-2019 Netflix, Inc. i-0d00fcda2fdf9c0de
            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <p className="text-secondary">Audio Description</p>
            <p className="text-secondary">Investor Relations</p>
            <p className="text-secondary">Legal Notices</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <p className="text-secondary">Help Center</p>
            <p className="text-secondary">Jobs</p>
            <p className="text-secondary">Cookie Preferences</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <p className="text-secondary">Gift Cards</p>
            <p className="text-secondary">Terms of Use</p>
            <p className="text-secondary">Corporate Information</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterNetflix;
