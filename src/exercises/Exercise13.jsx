import React, { useState, useEffect } from 'react';
import UserList from './UserList';

const Exercise13 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/users');
      if (!response.ok) {
        throw new Error('Falha ao buscar os usuários. Tente novamente mais tarde.');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Erro: {error}</p>;
  }

  return (
    <div>
      <h1>Exercício 13</h1>
      <UserList users={users} />
    </div>
  );
};

export default Exercise13;
