import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useSelector } from "react-redux";

const Left = () => {
  const { carDetail } = useSelector((state) => state);

  return (
    <Grid2 md={3} xs={12}>
      <Card sx={{ boxShadow: "none", background: "#F6F6F6" }}>
        <CardContent>
          <Typography variant="h5">{carDetail[0]?.name}</Typography>
          <Typography variant="body1">{carDetail[0]?.price} $</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={carDetail[0]?.image1}
          alt="green iguana"
        />
        <CardContent>
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Brand:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.name.split(" ")[0]}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Tanning:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.tanning}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Motor:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.motor}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Year:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.year}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Color:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.color}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Distance:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.distance}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "#000", fontWeight: 600 }}>
                Description:{" "}
              </span>
              {carDetail[0]?.description}
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box display="flex">
            <Typography variant="body2" fontWeight={600}>
              Price:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {carDetail[0]?.price} $
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default Left;
