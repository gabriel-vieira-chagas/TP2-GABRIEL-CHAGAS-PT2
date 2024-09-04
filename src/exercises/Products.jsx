import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul style={{ listStyle: 'none'}}>
        {products.map((product) => (
          <li key={product.id} style={{ width: '300px', border:'1px solid black', borderRadius: '25px', padding:'20px', margin:'20px', textAlign:'center'}}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '200px'}}/>
            <p>Preço: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
