import "./App.css";
import AuthProvider from "./Auth/AuthProvider";
import SnackbarComponent from "./components/SnackbarComponent";
import Routes from "./routes";

function App() {
  return (
    <>
      <SnackbarComponent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
