import React, { useState, useEffect } from 'react';
import Products from './Products';

const Exercise11 = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); 
      if (!response.ok) {
        throw new Error('Falha ao buscar os produtos. Tente novamente mais tarde.'); 
      }
      const data = await response.json(); 
      setProducts(data); 
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); 

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Erro: {error}</p>; 
  }

  return (
    <div>
      <h1>Exercício 11</h1>
      <Products products={products} />
    </div>
  );
};

export default Exercise11;
