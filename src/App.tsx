import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Payments from "./pages/admin/Payments";
import Investments from "./pages/admin/Investments";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/register/ForgotPassword";
import SetPassword from "./pages/register/SetPassword";
import Success from "./pages/register/Success";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/welcome" element={<Success />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/payments" replace />} />
          <Route index path="/payments" element={<Payments />} />
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
