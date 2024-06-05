const uri = {
  STUDENT_BIO: 'student',
  ACHIEVEMENT_TYPE: 'achievementtype',
  ACHIEVEMENT: 'achievement',
  COMPANY: 'company',
  STUDENT_ACADEMIC_RECORD: 'studentacademicrecord',
};

const getHttpEndpointForForm = (name) => {
  return (
    process.env.BACKEND_URL + '/' + uri[name.replaceAll(' ', '_').toUpperCase()]
  );
};

const postDataForForm = async (name, data) => {
  const response = await fetch(getHttpEndpointForForm(name), {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
const canGetLatestStudents = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/student/latests', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.ok;
};
const getLatestStudents = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/student/latests', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

const getYearsOfAdmission = async () => {
  const response = await fetch(
    process.env.BACKEND_URL + '/student/yearsOfAdmission',
    {
      credentials: 'include',
      method: 'GET',
      mode: 'cors',
    },
  );
  return response.json();
};

const getAchievementTypes = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/achievementTypes', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

const getAchievementLevels = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/achievementLevels', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

const getCompanies = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/companies', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

const getFilteredStudents = async (firstName, yearOfAdmission) => {
  const data = {
    firstName: firstName,
    yearOfAdmission: yearOfAdmission,
  };
  const response = await fetch(process.env.BACKEND_URL + '/student/filtered', {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json-patch+json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
const deleteStudent = async (id) => {
  const response = await fetch(process.env.BACKEND_URL + '/student/' + id, {
    credentials: 'include',
    method: 'DELETE',
    mode: 'cors',
  });
  return response.ok;
};

const downloadReportPdf = async (id) => {
  const response = await fetch(
    process.env.BACKEND_URL + '/student/report/' + id,
    {
      credentials: 'include',
      method: 'GET',
      mode: 'cors',
    },
  );
  if (!response.ok) throw new Error(response.statusText);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  console.log(url);
  window.open(url, '_blank');
};

function makeId(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export {
  getHttpEndpointForForm,
  postDataForForm,
  getLatestStudents,
  deleteStudent,
  downloadReportPdf,
  canGetLatestStudents,
  getFilteredStudents,
  getYearsOfAdmission,
  getAchievementTypes,
  getAchievementLevels,
  getCompanies,
  makeId,
};
