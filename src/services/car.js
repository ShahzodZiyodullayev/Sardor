import axios from "./API";

const CarDetailService = {
  async getCarDetail(route) {
    const data = await axios.carDetailBaseURL
      .get(route, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGE4ZjRiLTY1NDYtNGRhZi1iZTY1LTc0NTBjNzljNWQ3MyIsImlhdCI6MTY4NjkyMDc1MCwiZXhwIjoxNjg3MDA3MTUwfQ.058082W1zCc05Y8tOze0cot2KFkXPOuf0lTjs0-vVNY",
        },
      })
      .then((a) => a?.data)
      .catch((err) => console.log(err));

    return data;
  },
};

export default CarDetailService;
