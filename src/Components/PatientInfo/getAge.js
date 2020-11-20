/* eslint-disable no-plusplus */
export default function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const mParameter = today.getMonth() - birthDate.getMonth();
  if (mParameter < 0 || (mParameter === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
