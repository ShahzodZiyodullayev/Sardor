import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  loginUserFailure,
  loginUserStart,
  signUserUp,
} from "../../reducers/userReducer";
import authService from "../../services/auth";
import { setSnack } from "../../reducers/snackbarReducer";
import "./style.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  key: Yup.string().required("Key is required"),
  secret: Yup.string().required("Secret is required"),
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: "100%" }}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const SignUp = () => {
  const dispatch = useDispatch();
  const [showKey, setShowKey] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const handleClickShowKey = () => setShowKey((show) => !show);

  const handleMouseDownKey = (event) => {
    event.preventDefault();
  };
  const handleClickShowSecret = () => setShowSecret((show) => !show);

  const handleMouseDownSecret = (event) => {
    event.preventDefault();
  };

  return (
    <TabPanel value={1} index={1}>
      <Formik
        initialValues={{
          username: "",
          user_email: "",
          user_role: "",
          user_password: "",
        }}
        enableReinitialize
        validationSchema={Schema}
        onSubmit={async (values) => {
          dispatch(loginUserStart(true));
          authService
            .createNewUser({
              url: "signup",
              method: "POST",
              data: values,
            })
            .then((a) => {
              dispatch(loginUserFailure(false));
              if (a?.isOk) {
                dispatch(setSnack({ title: "Signed up", color: "success" }));
              } else {
                dispatch(
                  setSnack({
                    title: a?.response?.data?.message,
                    color: "error",
                  }),
                );
              }
              return a;
            })
            .then((a) => dispatch(signUserUp(a.data)));
        }}
      >
        {({ isSubmitting, values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
              <Box>
                <FormControl sx={{ width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    name="username"
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Username"
                  />
                </FormControl>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="errorMessage"
                />
              </Box>
              <Box>
                <FormControl sx={{ width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="email"
                    name="user_email"
                    value={values.user_email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Email"
                  />
                </FormControl>
                <ErrorMessage
                  name="user_email"
                  component="div"
                  className="errorMessage"
                />
              </Box>
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#999" }}
                  >
                    Role
                  </InputLabel>
                  <Select
                    name="user_role"
                    value={values.user_role}
                    label="Role"
                    onChange={handleChange}
                    MenuProps={{
                      MenuListProps: {
                        sx: {
                          backgroundColor: "#fff",
                        },
                      },
                    }}
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  name="user_role"
                  component="div"
                  className="errorMessage"
                />
              </Box>
              <Box>
                <FormControl sx={{ width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    // id="outlined-adornment-password"
                    type={showSecret ? "text" : "password"}
                    name="user_password"
                    value={values.user_password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowSecret}
                          onMouseDown={handleMouseDownSecret}
                          edge="end"
                        >
                          {showSecret ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <ErrorMessage
                  name="user_password"
                  component="div"
                  className="errorMessage"
                />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{
                    height: "56px",
                    boxShadow: "none",
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
};

export default SignUp;
