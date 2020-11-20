import React from 'react';
import PropTypes from 'prop-types';
import PatientItem from '../PatientItem/PatientItem';

export default function PatientList({ patientList, division }) {
  return (
    <ul>
      {patientList.map((patient) => (
        <PatientItem
          patient={patient}
          key={division + patient.historyNumber}
        />
      ))}
    </ul>
  );
}

PatientList.propTypes = {
  patientList: PropTypes.arrayOf(PropTypes.shape({
    historyNumber: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    patrName: PropTypes.string,
    birthDate: PropTypes.string,
    diagnosis: PropTypes.string,
    bedNumber: PropTypes.number,
  })).isRequired,
  division: PropTypes.string.isRequired,
};
