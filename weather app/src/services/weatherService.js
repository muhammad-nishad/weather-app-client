import axios from 'axios';

const API_URL = 'http://localhost:5000/graphql';

export const fetchWeatherData = async (city, from, to) => {
  
  try {
    const response = await axios.post(API_URL, {
      query: `
      query {
        weather(city: "${city}", from: "${from}", to: "${to}") {
          id
          city
          temperature
          description
          icon
          date
          }
          }
          `,
        });
        console.log(response.data.data.weather[0],'the reuten');
        
    return response.data.data.weather[0];
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
