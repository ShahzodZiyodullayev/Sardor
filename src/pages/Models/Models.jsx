import { Container } from "@mui/material";
import React, { useEffect } from "react";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import ModelsService from "../../services/model";
import { useDispatch } from "react-redux";
import { setModels } from "../../reducers/models";
import CardContainer from "./CardContiner/CardContainer";

const Models = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await ModelsService.getModels("models").then((e) => {
        dispatch(setModels(e));
      });
    })();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ background: "white" }}>
      <BasicBreadcrumbs breadcrumbs={[]} end="Home" />
      <CardContainer />
    </Container>
  );
};

export default Models;
