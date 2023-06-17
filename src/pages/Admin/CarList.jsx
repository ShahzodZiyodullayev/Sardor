import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Pagination,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import ModelPage from "./ModelPage";

const ModelList = () => {
  const [models, setModels] = useState([]);
  const [cars, setCars] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState("");
  const [carName, setCarName] = useState("");
  const [carMotor, setCarMotor] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carTanning, setCarTanning] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carDistance, setCarDistance] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carDescription, setCarDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleModelChange = (event) => {
    setSelectedModelId(event.target.value);
  };

  const handleCarCreate = () => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    const newCar = {
      model_id: selectedModelId,
      name: carName,
      motor: carMotor,
      color: carColor,
      tanning: carTanning,
      year: carYear,
      distance: carDistance,
      price: carPrice,
      description: carDescription,
    };

    axios
      .post("http://localhost:4000/car/create", newCar, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Car created successfully
        console.log(response.data);
        setDialogOpen(false);
      })
      .catch((error) => {
        // Error creating car
        console.error(error);
      });
  };

  const handleCarDelete = (carId) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));

    axios
      .delete(`http://localhost:4000/car/delete/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Car deleted successfully
        console.log(response.data);
        // Refresh car list
        fetchCars();
      })
      .catch((error) => {
        // Error deleting car
        console.error(error);
      });
  };

  const fetchModels = () => {
    const token = JSON.parse(localStorage.getItem("accessToken"));

    axios
      .get("http://localhost:4000/model/models", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Models fetched successfully
        setModels(response.data);
      })
      .catch((error) => {
        // Error fetching models
        console.error(error);
      });
  };

  const fetchCars = () => {
    const token = JSON.parse(localStorage.getItem("accessToken"));

    axios
      .get(`http://localhost:4000/car/list?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Cars fetched successfully
        setCars(response.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        // Error fetching cars
        console.error(error);
      });
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("accessToken"));

    if (token) {
      fetchModels();
      fetchCars();
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  const handlePaginationChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Container sx={{ my: "50px" }}>
      <Button
        variant="contained"
        sx={{ mb: "20px" }}
        color="primary"
        onClick={handleDialogOpen}
      >
        <AddIcon />
        Mashina qo'shish
      </Button>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle> Mashina qo'shish</DialogTitle>
        <DialogContent sx={{ mt: "20px" }}>
          <FormControl sx={{ width: "220px", ml: "10px" }}>
            <InputLabel>Select Model</InputLabel>
            <Select value={selectedModelId} onChange={handleModelChange}>
              {models.map((model) => (
                <MenuItem key={model.id} value={model.id}>
                  {model.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ p: "10px", ml: "13px" }}
            label="Car Name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Motor"
            value={carMotor}
            onChange={(e) => setCarMotor(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Color"
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Tanning"
            value={carTanning}
            onChange={(e) => setCarTanning(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Year"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Distance"
            value={carDistance}
            onChange={(e) => setCarDistance(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Price"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
          />
          <TextField
            sx={{ p: "10px" }}
            label="Car Description"
            value={carDescription}
            onChange={(e) => setCarDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button color="primary" onClick={handleCarCreate}>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Motor</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Tanning</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Distance</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {models.find((model) => model.id === car.model_id)?.name}
                </TableCell>
                <TableCell>{car.name}</TableCell>
                <TableCell>{car.motor}</TableCell>
                <TableCell>{car.color}</TableCell>
                <TableCell>{car.tanning}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.distance}</TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell>{car.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCarDelete(car.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        sx={{ mt: "30px", ml: "950px" }}
        count={totalPages}
        page={currentPage}
        onChange={handlePaginationChange}
      />
      <ModelPage />
    </Container>
  );
};

export default ModelList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       axios.get('http://localhost:4000/car/list', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then(response => {
//           const fetchCars = response.data;
//           setCars(fetchCars);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleDelete = (id) => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       axios.delete(`http://localhost:4000/car/admin/delete/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then(response => {
//           console.log('Car deleted successfully');
//           // Refresh car list or perform any other necessary actions
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     } else {
//       navigate('/login');
//     }
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell></TableCell>
//             {/* <TableCell>Model Name</TableCell> */}
//             <TableCell>Car Name</TableCell>
//             <TableCell>Motor</TableCell>
//             <TableCell>Color</TableCell>
//             <TableCell>Tanning</TableCell>
//             <TableCell>Year</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {cars.map(car => (
//             <TableRow key={car.id}>
//               <TableCell>
//                 <Checkbox />
//               </TableCell>
//               {/* <TableCell>{car.model.name}</TableCell> */}
//               <TableCell>{car.name}</TableCell>
//               <TableCell>{car.motor}</TableCell>
//               <TableCell>{car.color}</TableCell>
//               <TableCell>{car.tanning}</TableCell>
//               <TableCell>{car.year}</TableCell>
//               <TableCell>{car.price}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="secondary" onClick={() => handleDelete(car.id)}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CarList;
