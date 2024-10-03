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
import PersonalInfo from "./pages/register/PersonalInfo";
import VerifyOTP from "./pages/register/VerifyOTP";
import Welcome from "./pages/register/Welcome";
import Overview from "./pages/admin/Overview";
import Property from "./pages/admin/Property";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/biodata" element={<PersonalInfo />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/admin" element={<RootLayout />}>
          <Route index path="overview" element={<Overview />} />
          <Route path="property" element={<Property />} />
          <Route path="payments" element={<Payments />} />
          <Route path="investments" element={<Investments />} />
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
