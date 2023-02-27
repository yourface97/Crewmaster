import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import EditUnits from './pages/EditUnits';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dsc/units/add" element={<EditUnits />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;