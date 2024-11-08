import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import ProductDetail from "./components/ProductDetail";
import Sales from "./components/Sales";
import SalesButton from "./components/salesbutton";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResults />} />
          <Route path="/item/:id" element={<ProductDetail />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
        <SalesButton />
      </BrowserRouter>
    </>
  );
}

export default App;
