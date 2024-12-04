
import React from "react";
import Products from "../../components/Products"; // Ensure the relative path is correct

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Products /> {/* Rendering the Products component */}
    </div>
  );
};

export default ProductsPage;
