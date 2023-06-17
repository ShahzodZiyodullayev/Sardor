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

import Drawers from "./Drawer/Drawers";
// import { loginUserOut } from "../../../reducers/userReducer";
import "./style.css";
// import { setAllBooks, setSearchBooks } from "../../../reducers/booksReducer";

const Header = () => {
  const theme = useTheme();
  // const { user } = useSelector((state) => state.auth);
  const [state, setState] = useState(false);
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

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
            <Button
              variant="contained"
              startIcon={<PermIdentityOutlinedIcon />}
              sx={{
                boxShadow: "none",
                textTransform: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Adminga o'tish
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
