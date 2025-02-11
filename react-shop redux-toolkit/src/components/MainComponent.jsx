// import AdminEdit from "./Pages/AdminEdit";
// import AdminPage from "./Pages/AdminPage";
// import BagPage from "./Pages/BagPage";
import ProductsPage from "./Pages/ProductsPage";
import { Routes, Route } from "react-router-dom";

function MainComponent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
         {/* <Route path="/bag" element={<BagPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-edit" element={<AdminEdit />} />  */}
      </Routes>
    </main>
  );
}

export default MainComponent;
