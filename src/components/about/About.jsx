import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <div className="d-flex">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://source.unsplash.com/random/171x180/?img=2/"
              thumbnail
            />
          </Col>
        </Row>
      </Container>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint
        consequatur, eveniet nam numquam tenetur quaerat ducimus. Praesentium
        tempora laborum fugiat id ex. Eos error, rerum quidem aut eveniet
        consectetur enim cupiditate! Quasi ipsa impedit quae aut quis, possimus
        odit autem odio rem voluptates!
      </div>
    </div>
  );
};

export default About;
