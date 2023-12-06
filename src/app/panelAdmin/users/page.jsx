"use client"
import React, { useState } from 'react';
import './users.css';

const Page = () => {
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Dami puto', email: 'usuario1@example.com' },
    { id: 2, name: 'Santeta', email: 'usuario2@example.com' },
    { id: 3, name: 'Translate', email: 'usuario3@example.com' },
  ]);

  // elimina un usuario por id
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  // renderizar las filas de la tabla
  const renderRows = () => {
    return users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          
          <button onClick={() => deleteUser(user.id)}>🗑️</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className='userCont'>
      <h1>USERS</h1>

      <div className='userDiv'>
        
        <table>

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>{renderRows()}</tbody>
        </table>

      </div>
    </div>
  );
};

export default Page;
