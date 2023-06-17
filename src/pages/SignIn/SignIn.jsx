import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import authService from "../../services/auth";
import { useDispatch } from "react-redux";
import {
  loginUserFailure,
  loginUserStart,
  loginUserSuccess,
} from "../../reducers/userReducer";
import { setSnack } from "../../reducers/snackbarReducer";
import "./style.css";

const Schema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
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

const SignIn = () => {
  const dispatch = useDispatch();
  const [showKey, setShowKey] = useState(false);

  const handleClickShowKey = () => setShowKey((show) => !show);

  const handleMouseDownKey = (event) => {
    event.preventDefault();
  };

  return (
    <TabPanel value={0} index={0}>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        enableReinitialize
        validationSchema={Schema}
        onSubmit={async (values) => {
          dispatch(loginUserStart(true));
          authService
            .loginUser("login", {
              user_email: values.email,
              user_password: values.password,
            })
            .then((a) => {
              dispatch(loginUserFailure(false));
              if (a?.msg) {
                dispatch(setSnack({ title: "Signed in", color: "success" }));
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
            .then((a) => dispatch(loginUserSuccess(a)));
        }}
      >
        {({ isSubmitting, values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
              <Box>
                <FormControl sx={{ width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Email"
                  />
                </FormControl>
                <ErrorMessage
                  name="email"
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
                    type={showKey ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowKey}
                          onMouseDown={handleMouseDownKey}
                          edge="end"
                        >
                          {showKey ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <ErrorMessage
                  name="password"
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
                  Sign in
                </Button>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
};

export default SignIn;
