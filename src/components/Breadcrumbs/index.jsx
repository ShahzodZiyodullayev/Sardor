import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import Lin from "@mui/material/Link";
// import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({ breadcrumbs, end }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Brauzer tarixidagi oldingi sahifaga qaytarish
  };

  return (
    <>
      <div
        role="presentation"
        onClick={handleClick}
        style={{ backgroundColor: "white" }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ backgroundColor: "white" }}>
          {breadcrumbs.map((e, i) => (
            <>
              {i === 0 ? (
                <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                  Home
                </Link>
              ) : (
                <Lin
                  onClick={goBack}
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {e}
                </Lin>
              )}
            </>
          ))}

          <Typography color="text.primary">{end}</Typography>
        </Breadcrumbs>
      </div>
      <Typography variant="h2" ml="-4px" my={3}>
        Modellari
      </Typography>
    </>
  );
}
