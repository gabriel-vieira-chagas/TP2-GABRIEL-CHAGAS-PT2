import React, { useState, useEffect } from 'react';
import Products from './Products'; 

const Exercise10 = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao buscar os produtos. Tente novamente mais tarde.'); 
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <p>Carregando...</p>; 
  }

  if (error) {
    return <p style={{ color: 'red' }}>Erro: {error}</p>; 
  }

  return (
    <div>
      <h1>Exercício 10</h1>
      <Products products={products} /> 
    </div>
  );
};

export default Exercise10;  