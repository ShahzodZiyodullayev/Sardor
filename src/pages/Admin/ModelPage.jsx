import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ModelPage = () => {
  const [models, setModels] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [modelName, setModelName] = useState("");
  const [modelPicture, setModelPicture] = useState("");

  useEffect(() => {
    // Model ma'lumotlarini olish
    const token = JSON.parse(localStorage.getItem("accessToken"));
    axios
      .get("http://localhost:4000/model/models", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setModels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreateModel = () => {
    // Yaratish uchun post so'rovni jo'natish
    const token = JSON.parse(localStorage.getItem("accessToken"));
    const formData = new FormData();
    formData.append("name", modelName);
    formData.append("picture", modelPicture);

    axios
      .post("http://localhost:4000/model/admin/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Model yaratildi, qo'shilgan modelni qaytarish
        const createdModel = response.data;
        setModels([...models, createdModel]);
        setDialogOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Models</h2>
      <Button variant="contained" onClick={() => setDialogOpen(true)}>
        <AddIcon />
        Create Model
      </Button>
      <Grid container spacing={2}>
        {models.map((model) => (
          <Grid key={model.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <h3>{model.name}</h3>
                <img
                  src={model.picture}
                  alt={model.name}
                  style={{ width: "100%" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Create Model</DialogTitle>
        <DialogContent>
          <TextField
            label="Model Name"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            fullWidth
          />
          <br />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setModelPicture(e.target.files[0])}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleCreateModel}>
            Create
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModelPage;
