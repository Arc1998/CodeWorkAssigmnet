import React, { useEffect, useState } from "react";
import "./ListOfProducts.css";
import categoriesOfGroup from "../utils/categoriesOfGroup";
import { fetchAllProducts } from "../api/productApi";

const ListOfProducts = () => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchAllProducts();
        const grouped = categoriesOfGroup(products);
        setGroupedProducts(grouped);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p className="loader">Loading products...</p>;

  return (
    <div className="container">
      <h1 className="main-title">Products by Category</h1>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfProducts;
