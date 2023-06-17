import { Container } from "@mui/material";
import React, { useEffect } from "react";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import ModelsService from "../../services/model";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModelsList } from "../../reducers/models";
import CardContainer from "./CardContainer/CardContainer";

const SubModels = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const modelId = params.subModels;
      await ModelsService.getSubModels(`carModel/${modelId}`).then((e) => {
        dispatch(setModelsList(e));
      });
    })();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ background: "white" }}>
      <BasicBreadcrumbs breadcrumbs={["Home"]} end="Models" />
      <CardContainer />
    </Container>
  );
};

export default SubModels;
