import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';

const Exercise15 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
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

  const handleSelectChange = (event) => {
    const userId = event.target.value;
    const user = users.find(user => user.id === parseInt(userId));
    setSelectedUser(user);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Erro: {error}</p>;
  }

  return (
    <div>
      <h1>Exercício 15</h1>
      <select onChange={handleSelectChange} defaultValue="">
        <option value="" disabled>Selecione um usuário</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name.firstname} {user.name.lastname}
          </option>
        ))}
      </select>
      <UserDetails user={selectedUser} />
    </div>
  );
};

export default Exercise15;
