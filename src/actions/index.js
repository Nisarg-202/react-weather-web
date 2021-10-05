import axios from 'axios';

export const weatherFetch = function (city) {
  return async function (dispatch) {
    const response = await axios.post(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=b3e4787ff6fa935ea22fa4736311cf29`
    );
    dispatch({type: 'WEATHER_DATA', payload: response.data});
  };
};
