const baseUrl = 'https://api.darksky.net';

async function fetchWeatherData() {
  const forecastUrl = `${baseUrl}/forecast/${process.env.REACT_APP_API_KEY}/37.8267,-122.4233`;
  console.log('forecastURL', forecastUrl);
  const { currently } = await fetch(forecastUrl)
    .then(response => response.json())
    .then(data => console.log('data', data))
    .catch(error => error);
  return { currently };
}

export default { fetchWeatherData };
