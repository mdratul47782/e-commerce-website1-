// src/Component/Product.jsx

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Col, Toast } from 'react-bootstrap';
import CartContext from './CartContext';
import { FaCartPlus } from 'react-icons/fa';

function Product({ category }) {
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  function handleDetailsClick(product) {
    navigate(`/product-details/${product.id}`);
  }

  function handleAddToCart(product) {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  return (
    <>
      {products.map(product => (
        <Col md={4} className="mb-4" key={product.id}>
          <Card className="h-100">
            <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary" onClick={() => handleDetailsClick(product)}>Product Details</Button>
              <Button variant="warning" className="ml-2" onClick={() => handleAddToCart(product)}>
                <FaCartPlus /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
        <Toast.Body>Product added to cart!</Toast.Body>
      </Toast>
    </>
  );
}

export default Product;
