import './App.sass';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PatientInfo from './Components/PatientInfo/PatientInfo';
import ListArea from './Components/ListArea/ListArea';

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <PatientInfo />
          </Col>
          <Col xs={12} md={6}>
            <ListArea />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
