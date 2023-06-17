import axios from "./API";

const authService = {
  async loginUser(route, datas) {
    try {
      const data = await axios.userLoginBaseURL
        .post(route, {
          ...datas,
        })
        .then((a) => a?.data);

      return data;
    } catch (error) {
      return error;
    }
  },
  async createNewUser(axiosConfig) {
    try {
      const response = await axios(axiosConfig);
      return response?.data;
    } catch (error) {
      return error;
    }
  },
};

export default authService;
