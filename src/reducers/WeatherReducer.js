export default function (state = [], action) {
  switch (action.type) {
    case 'WEATHER_DATA':
      return [action.payload, ...state];
    default:
      return state;
  }
}
