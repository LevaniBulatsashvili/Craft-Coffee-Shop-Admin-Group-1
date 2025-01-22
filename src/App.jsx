import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./layouts/Sidebar";
import CreateCoffeePage from "./pages/CoffeePage";
import IngredientsPage from "./pages/IngredientsPage";
import CoffeeContextProvider from "./contexts/CoffeeContext";

function App() {
  return (
    <CoffeeContextProvider>
      <div className="app">
        <SideBar />
       
        <Routes>
          <Route path="/coffee" element={<CreateCoffeePage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
        </Routes>
      </div>
    </CoffeeContextProvider>
  );
}

export default App;
