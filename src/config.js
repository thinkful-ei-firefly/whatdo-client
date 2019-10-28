export default {
  // API_ENDPOINT: 'https://thinkful-whatdo.herokuapp.com/api',
  API_ENDPOINT: 'http://localhost:8000/api',
  TOKEN_KEY: 'dev-client-auth-token',
  REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'https://thinkful-whatdo.herokuapp.com/api',//'http://localhost:8000/api',
  REACT_APP_TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'dev-client-auth-token',
  EVENTFUL_SEARCH_ENDPOINT: 'http://api.eventful.com/json/events/search?app_key=xM3Wdb6GJm4W2MSh',
  EVENTFUL_SINGLE_EVENT_ENDPOINT: 'http://api.eventful.com/json/events/get?app_key=xM3Wdb6GJm4W2MSh',
  OPEN_WEATHER_FORECAST_ENDPOINT: 'https://api.openweathermap.org/data/2.5/forecast?APPID=b762cee79d34458a0c6aadef118e64c3'
}