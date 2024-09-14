import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
