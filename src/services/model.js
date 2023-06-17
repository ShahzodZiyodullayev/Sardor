import axios from "./API";

const ModelsService = {
  async getModels(route) {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const data = await axios.modelsBaseURL
      .get(route, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((a) => a?.data)
      .catch((err) => console.log(err));

    return data;
  },
  async getSubModels(route) {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    console.log(accessToken);
    const data = await axios.modelsListBaseURL
      .get(route, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((a) => a?.data)
      .catch((err) => console.log(err));

    return data;
  },
};

export default ModelsService;
