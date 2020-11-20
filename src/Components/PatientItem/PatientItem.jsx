/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './PatientItem.sass';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectPatient } from '../../actions/actions';
import isPatientSelected from './isPatientSelected';

function PatientItem({ patient }) {
  const dispatch = useDispatch();
  const { selectedPatient } = useSelector((state) => state);
  return (
    <li
      className={(isPatientSelected(patient, selectedPatient))
        ? 'selected'
        : 'casual'}
      onClick={() => { dispatch(selectPatient(patient)); }}
    >
      <div className="listHover">
        <Container>
          <Row>
            <Col>
              {patient.historyNumber}
            </Col>
            <Col>
              {patient.firstName}
            </Col>
            <Col>
              {patient.diagnosis}
            </Col>
          </Row>
        </Container>
      </div>

    </li>
  );
}

PatientItem.propTypes = {
  patient: PropTypes.shape({
    historyNumber: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    patrName: PropTypes.string,
    birthDate: PropTypes.string,
    diagnosis: PropTypes.string,
    bedNumber: PropTypes.number,
  }).isRequired,
};

export default PatientItem;
