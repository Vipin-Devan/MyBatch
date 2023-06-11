import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InventoryPage from "./pages/InventoryPage";
import OurRecipesPage from "./pages/OurRecipesPage";
import HowToBrew from "./pages/HowToBrewPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import Homepage from "./pages/HomePage";
import { getOurRecipes } from "./utils/ApiService";
import { useState, useEffect } from "react";

function App() {
  const [allRecipes, setAllRecipes] = useState(null);
  useEffect(() => {
    getOurRecipes().then((fetchedRecipes) => {
      setAllRecipes(fetchedRecipes);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/inventory"
          element={<InventoryPage allRecipes={allRecipes}></InventoryPage>}
        ></Route>
        <Route
          path="/our-recipes"
          element={<OurRecipesPage allRecipes={allRecipes}></OurRecipesPage>}
        ></Route>
        <Route path="/how-to-brew" element={<HowToBrew></HowToBrew>}></Route>
        <Route
          path="/my-recipes"
          element={<MyRecipesPage></MyRecipesPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
