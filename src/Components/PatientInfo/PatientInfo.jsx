import React from 'react';
import './PatientInfo.sass';
import { useSelector } from 'react-redux';
import getAge from './getAge';

function PatientInfo() {
  const { selectedPatient, isPatientSelected } = useSelector((state) => state);
  return (
    <div className="patientInfo">
      <div className="infoTitle">
        Информация о пациенте
      </div>
      <div className="infoArea">
        <div className="directionRow">
          <div className="infoParameter">ФИО</div>
          <div className="infoValue">
            {(isPatientSelected === true)
              ? selectedPatient.firstName
              : ''}
          </div>
        </div>
        <div className="directionRow">
          <div className="infoParameter">Возраст</div>
          <div className="infoValue">
            {(isPatientSelected === true)
              ? getAge(selectedPatient.birthDate)
              : ''}
          </div>
        </div>
        <div className="directionRow">
          <div className="infoParameter">Диагноз</div>
          <div className="infoValue">
            {(isPatientSelected === true)
              ? selectedPatient.diagnosis
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientInfo;
