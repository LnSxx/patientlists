export default function isPatientSelected(patientData, storePatientData) {
  if (JSON.stringify(patientData) === JSON.stringify(storePatientData)) {
    return true;
  } return false;
}
