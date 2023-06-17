import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  const snackbar = useSelector((state) => state.snackbar);

  useEffect(() => {
    if (snackbar.title && snackbar.color) {
      enqueueSnackbar(snackbar.title, { variant: snackbar.color });
    }
  }, [snackbar]);

  return <React.Fragment></React.Fragment>;
}

export default function SnackbarComponent() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
