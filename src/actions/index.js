import axios from "axios";

export const weatherFetch = function (city) {
  return async function (dispatch) {
    const response = await axios.post(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${process.env.REACT_APP_WEATHER_API}`
    );
    dispatch({ type: "WEATHER_DATA", payload: response.data });
  };
};
