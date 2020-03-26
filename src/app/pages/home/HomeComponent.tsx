import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import reactImage from '../../assets/images/react.png';
import './home.scss';

const Home: React.FC<any> = ({}) => {
  return (
    <div className="home-component">
      <Container>
        <Row className="justify-content-around">
          <Col xs={3}>
            <h2 className="text-center">Home</h2>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col xs={6}>
            <img src={reactImage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
