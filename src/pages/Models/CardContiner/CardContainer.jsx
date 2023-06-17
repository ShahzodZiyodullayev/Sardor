import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CarCard from "../../../components/CarCard/CarCard";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const { models } = useSelector((state) => state);

  return (
    <Grid2 container spacing={3}>
      {models?.map((model) => (
        <CarCard key={model?.id} model={model} />
      ))}
    </Grid2>
  );
};

export default CardContainer;
