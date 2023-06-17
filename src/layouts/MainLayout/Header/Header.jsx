import React, { useEffect, useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

// import Drawers from "./Drawer/Drawers";
// import { loginUserOut } from "../../../reducers/userReducer";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
// import { setAllBooks, setSearchBooks } from "../../../reducers/booksReducer";

const Header = () => {
  const theme = useTheme();
  const path = useLocation().pathname;
  // const { user } = useSelector((state) => state.auth);
  const [state, setState] = useState(false);
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    console.log(path);
  }, [path]);

  useEffect(() => {
    if (isLg && isLg === true) {
      setState(false);
    }
  }, [isLg]);

  return (
    <>
      {/* <Drawers
        open={state}
        toggleDrawer={toggleDrawer}
        handleCloseNavMenu={handleCloseNavMenu}
        user={user}
      /> */}
      <AppBar
        position="relative"
        sx={{
          boxShadow: "none",
          backgroundColor: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(15px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
            <Link to={path === "/" ? "/admin" : "/"}>
              <Button
                variant="contained"
                startIcon={
                  path === "/" ? (
                    <PermIdentityOutlinedIcon />
                  ) : (
                    <HomeOutlinedIcon />
                  )
                }
                sx={{
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
              >
                {path === "/" ? "Adminga o'tish" : "Bosh sahifaga qaytish"}
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
