import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Payments from "./pages/admin/Payments";
import Investments from "./pages/admin/Investments";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/payments" element={<Payments />} />
          <Route path="/investments" element={<Investments />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
