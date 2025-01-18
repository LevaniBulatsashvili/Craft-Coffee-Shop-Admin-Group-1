import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./layouts/Sidebar";
import CreateCoffeePage from "./pages/CoffeePage";
import IngredientsPage from "./pages/IngredientsPage";

function App() {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/" element={<CreateCoffeePage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
      </Routes>
    </div>
  );
}

export default App;
