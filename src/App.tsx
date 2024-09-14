import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Payments from "./pages/admin/Payments";
import Investments from "./pages/admin/Investments";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/payments" element={<Payments />} />
          <Route path="/investments" element={<Investments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
