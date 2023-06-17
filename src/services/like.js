import axios from "./API";

const weatherService = {
  async getWeather(coordinates) {
    // return;
    const data = await axios.weatherBaseURL
      .get(coordinates)
      .then((a) => a)
      .catch((err) => console.log(err));

    return data;
  },
};

export default weatherService;
