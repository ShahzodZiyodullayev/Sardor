import { AppBar, Container, Toolbar, Button } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import "./style.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <>
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
