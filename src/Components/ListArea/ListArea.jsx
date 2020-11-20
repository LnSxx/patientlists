/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import './ListArea.sass';
import { Container, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PatientList from '../PatientList/PatientList';
import downloadPatientLists from './downloadPatientLists';

function ListArea() {
  const { patientList, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(downloadPatientLists()); }, []);
  if (error === null) {
    return (
      <div className="patientsList">
        <div className="listNav">
          <input type="radio" id="tab-btn-1" name="listNav" defaultChecked />
          <label htmlFor="tab-btn-1">
            <div className="navButton">
              ПРИСУТСТВУЮТ(
              {(patientList.presentListIsLoaded === true)
                ? patientList.present.length
                : '0'}
              )
            </div>
          </label>
          <input type="radio" id="tab-btn-2" name="listNav" />
          <label htmlFor="tab-btn-2">
            <div className="navButton">
              ВЫБЫВШИЕ(
              {(patientList.quittingListIsLoaded === true)
                ? patientList.quitting.length
                : '0'}

              )
            </div>
          </label>
          <div className="listColumns">
            <Container>
              <Row>
                <Col>
                  №ИБ
                </Col>
                <Col>
                  ФИО
                </Col>
                <Col>
                  Диагноз
                </Col>
              </Row>
            </Container>
          </div>
          <div id="present" className="scrollable">
            {(patientList.presentListIsLoaded === true)
              ? <PatientList patientList={patientList.present} division="PRESENT_LIST" />
              : <div>Загрузка, подождите пожалуйста</div>}

          </div>
          <div id="quitting" className="scrollable">
            {(patientList.presentListIsLoaded === true)
              ? <PatientList patientList={patientList.quitting} division="QUITTING_LIST" />
              : <div>Загрузка, подождите пожалуйста</div>}

          </div>
        </div>
      </div>

    );
  }
  return (
    <div className="patientsList">
      {error.message}
    </div>
  );
}

export default ListArea;
