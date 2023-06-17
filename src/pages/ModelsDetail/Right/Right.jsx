import {
  Card,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useSelector } from "react-redux";

const Right = () => {
  const { carDetail } = useSelector((state) => state);
  const [value, setValue] = React.useState("image2");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid2 md={9} xs={12}>
      <Card sx={{ boxShadow: "none" }}>
        <CardContent>
          <Typography variant="h5">
            {carDetail && carDetail[0] && carDetail[0]?.name}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image={carDetail && carDetail[0] && carDetail[0][value]}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            The image may not match the selected configuration. The color of the
            machine may differ from the one presented on this site.
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="image2"
                control={<Radio />}
                label="External"
              />
              <FormControlLabel
                value="image3"
                control={<Radio />}
                label="Internal"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default Right;
