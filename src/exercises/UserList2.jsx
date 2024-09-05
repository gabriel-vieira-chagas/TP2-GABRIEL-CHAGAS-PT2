import React from 'react';

const UserList2 = ({ users, onUserClick }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onUserClick(user.id)} style={{ cursor: 'pointer', color: 'blue' }}>
            {user.name.firstname} {user.name.lastname} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList2;
