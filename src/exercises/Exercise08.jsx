import React, { useState } from 'react';

const KeywordDisplay = ({ keyword }) => {
  return (
    <div>
      <h2>Palavra-chave: {keyword}</h2>
    </div>
  );
};

const Exercise08 = () => {
    const [keyword, setKeyword] = useState(''); // Estado para armazenar a palavra-chave

    const handleInputChange = (event) => {
      setKeyword(event.target.value); // Atualiza o estado com o valor digitado pelo usuário
    };
  
    return (
      <div>
        <h1>Exercício 08</h1>
        <p>Digite uma palavra-chave para exibi-la abaixo:</p>
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange} // Chama a função ao mudar o valor do input
          placeholder="Digite aqui..."
        />
        <KeywordDisplay keyword={keyword} /> {/* Passa a palavra-chave como props */}
      </div>
  );
};

export default Exercise08;
