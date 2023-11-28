import "./App.css";
import Navbar from "./components/Navbar";
import AddBeerPage from "./pages/AddBeerPage";
import AllBeersPage from "./pages/AllBeersPage";
import HomePage from "./pages/HomePage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>*LAST🎊* | React IronBeers</h1>
      <Navbar />
<hr />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/beers"} element={<AllBeersPage />} />
        <Route path={"/random-beer"} element={<RandomBeerPage />} />
        <Route path={"/new-beer"} element={<AddBeerPage />} />
        <Route path={"/beers/:beerId"} element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
