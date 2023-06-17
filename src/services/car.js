import axios from "./API";

const CarDetailService = {
  async getCarDetail(route) {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const data = await axios.carDetailBaseURL
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

export default CarDetailService;
