import { Container } from "@mui/material";
import React, { useEffect } from "react";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import CarDetailService from "../../services/car";
import { setCarDetail } from "../../reducers/carDetail";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Left from "./Left/Left";
import Right from "./Right/Right";

const ModelsDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  let detailId = params.detailId;

  useEffect(() => {
    (async () => {
      await CarDetailService.getCarDetail(`car/${detailId}`).then((e) => {
        dispatch(setCarDetail(e));
      });
    })();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ background: "white" }}>
      <BasicBreadcrumbs breadcrumbs={["Home", "Models"]} end="Models Detail" />
      <Grid2 container spacing={2}>
        <Left />
        <Right />
      </Grid2>
    </Container>
  );
};

export default ModelsDetail;
