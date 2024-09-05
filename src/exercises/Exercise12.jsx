import React, { useState, useEffect } from 'react';
import Products from './Products'; 

const Exercise12 = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json()) 
      .then((data) => {
        setProducts(data); 
        setLoading(false); 
      })
      .catch((error) => console.error('Erro ao buscar os produtos:', error));
  }, []);

  if (loading) {
    return <p>Carregando...</p>; 
  }

  return (
    <div>
      <h1>Exercício 12</h1>
      <Products products={products} />
    </div>
  );
};

export default Exercise12;