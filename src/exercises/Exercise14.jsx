import React, { useState, useEffect } from 'react';
import UserList from './UserList2';
import UserDetails from './UserDetails';

const Exercise14 = () => {
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

  const fetchUserDetails = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar os detalhes do usuário. Tente novamente mais tarde.');
      }
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserClick = (id) => {
    fetchUserDetails(id);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Erro: {error}</p>;
  }

  return (
    <div>
      <h1>Exercício 14</h1>
      <UserList users={users} onUserClick={handleUserClick} />
      <UserDetails user={selectedUser} />
    </div>
  );
};

export default Exercise14;
