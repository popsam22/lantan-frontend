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
import Property from "./pages/admin/property/Property";
import PropertiesList from "./pages/admin/property/PropertiesList";
import ViewProperty from "./pages/admin/property/ViewProperty";
import EditProperty from "./pages/admin/property/EditProperty";
import Review from "./pages/admin/Review";
import Customers from "./pages/admin/customers/Customers";
import AddCustomer from "./pages/admin/customers/AddCustomer";
import ViewCustomer from "./pages/admin/customers/ViewCustomer";
import EditCustomer from "./pages/admin/customers/EditCustomer";
import Settings from "./pages/admin/Settings";

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
          <Route path="overview" element={<Overview />} />
          <Route path="property">
            <Route path="add-property" element={<Property />} />
            <Route path="properties" element={<PropertiesList />} />
            <Route path="view" element={<ViewProperty />} />
            <Route path="edit" element={<EditProperty />} />
          </Route>
          <Route path="customers">
            <Route index element={<Customers />} />
            <Route path="new" element={<AddCustomer />} />
            <Route path="view" element={<ViewCustomer />} />
            <Route path="update" element={<EditCustomer />} />
          </Route>
          <Route path="payments" element={<Payments />} />
          <Route path="investments" element={<Investments />} />
          <Route path="reviews" element={<Review />} />
          <Route path="settings">
            <Route index element={<Settings />} />
          </Route>
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
