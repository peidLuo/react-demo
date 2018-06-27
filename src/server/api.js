import fetch from '../utils/fetch';

const getDot = async () => {
  const data = await fetch.get('/bookingbillV3/getRegisterTodayDoctorsInfo.htmls');
  return data;
};

const getPersonReged = async () => {
  const data = await fetch.get('/bookingbillV3/getRegisterTodayDoctorsInfo.htmls');
  return data;
};

export { getDot, getPersonReged };

