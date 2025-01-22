import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./layouts/Sidebar";
import CoffeeContextProvider from "./contexts/CoffeeContext";
import CoffeePage from "./pages/CoffeePage";
import IngredientPage from "./pages/IngredientPage";
import CoffeeManagePage from "./pages/CoffeeManagePage";
import IngredientManagePage from "./pages/IngredientManagePage";

function App() {
  return (
    <CoffeeContextProvider>
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/coffee" replace />} />
          <Route path="/coffee" element={<CoffeePage />} />
          <Route path="/ingredient" element={<IngredientPage />} />
          <Route path="/coffee/manage" element={<CoffeeManagePage />} />
          <Route path="/ingredient/manage" element={<IngredientManagePage />} />
        </Routes>
      </div>
    </CoffeeContextProvider>
  );
}

export default App;
