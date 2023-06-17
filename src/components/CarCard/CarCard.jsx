import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ model }) => {
  return (
    <Grid2 xs={12} sm={6} md={4} lg={3}>
      <Link
        to={
          model.price
            ? `/models/modelsDetail/${model.id}`
            : `models/${model.id}`
        }
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image={model?.picture || model?.image1}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={model?.price ? "start" : "center"}
            >
              {model?.name}
            </Typography>
            {model?.price && (
              <Typography variant="body2" color="text.secondary">
                Price: {model.price} $
              </Typography>
            )}
          </CardContent>
        </Card>
      </Link>
    </Grid2>
  );
};

export default CarCard;
