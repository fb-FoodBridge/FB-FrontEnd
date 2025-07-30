import { ToastContainer } from "react-toastify";
import AppRouter from "./routes/routers";

function App() {
  return (
     <>
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
