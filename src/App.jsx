import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./layouts/Sidebar";
import CreateCoffeePage from "./pages/CoffeePage";
import IngredientPage from "./pages/IngredientPage";
import CoffeeContextProvider from "./contexts/CoffeeContext";
import CoffeePage from "./pages/CoffeePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <CoffeeContextProvider>
      <div>
        <SideBar />
        <Routes>
        <Route path="/" element={<Navigate to="/coffee" replace />}/>
           <Route path="/coffee" element={<CoffeePage />} />
           <Route path="/ingredients" element={<IngredientPage />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </CoffeeContextProvider>
  );
}



export default App;
