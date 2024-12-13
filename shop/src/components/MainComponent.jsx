import AdminPage from "./Pages/AdminPage";
import BagPage from "./Pages/BagPage";
import ProductsPage from "./Pages/ProductsPage";
import { Routes, Route } from "react-router-dom";

function MainComponent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/bag" element={<BagPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </main>
  );
}

export default MainComponent;
