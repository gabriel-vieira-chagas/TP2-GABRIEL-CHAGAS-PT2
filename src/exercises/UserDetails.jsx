import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>Nome: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>
      <p>Endereço: {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserDetails;