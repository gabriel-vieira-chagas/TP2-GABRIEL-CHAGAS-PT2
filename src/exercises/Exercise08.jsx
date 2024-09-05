import React, { useState } from 'react';

const KeywordDisplay = ({ keyword }) => {
  return (
    <div>
      <h2>Palavra-chave: {keyword}</h2>
    </div>
  );
};

const Exercise08 = () => {
    const [keyword, setKeyword] = useState(''); 
    const handleInputChange = (event) => {
      setKeyword(event.target.value); 
    };
  
    return (
      <div>
        <h1>Exercício 08</h1>
        <p>Digite uma palavra-chave para exibi-la abaixo:</p>
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          placeholder="Digite aqui..."
        />
        <KeywordDisplay keyword={keyword} /> 
      </div>
  );
};

export default Exercise08;
