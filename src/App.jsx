import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./layouts/Sidebar";
import CreateCoffeePage from "./pages/CoffeePage";
import IngredientsPage from "./pages/IngredientsPage";
import CoffeeContextProvider from "./contexts/CoffeeContext";
import CoffeePage from "./pages/CoffeePage";

function App() {
//   return (
//     <CoffeeContextProvider>
//       <div>
//         <SideBar />
//         <Routes>
//           <Route path="/" element={<CreateCoffeePage />} />
//           <Route path="/ingredients" element={<IngredientsPage />} />
//         </Routes>
//       </div>
//     </CoffeeContextProvider>
//   );
// }

return (
  <CoffeeContextProvider>
      <IngredientsPage/>

</CoffeeContextProvider>
)
}

export default App;
