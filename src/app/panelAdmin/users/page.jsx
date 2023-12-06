// "use client";
// import React, { useState } from "react";
// import "./users.css";

// const Page = () => {
//   // const [users, setUsers] = useState([
//   //   { id: 1, name: 'Dami puto', email: 'usuario1@example.com' },
//   //   { id: 2, name: 'Santeta', email: 'usuario2@example.com' },
//   //   { id: 3, name: 'Translate', email: 'usuario3@example.com' },
//   // ]);
//   const newUsers = async () => {
//     const users = await axios("/api/users");
//     return users;
//   };
//   console.log(newUsers);

//   // elimina un usuario por id
//   // const deleteUser = (userId) => {
//   //   const updatedUsers = users.filter((user) => user.id !== userId);
//   //   setUsers(updatedUsers);
//   // };

//   // renderizar las filas de la tabla
//   // const renderRows = () => {
//   //   return newUsers.map((user) => (
//   //     <tr key={user.id}>
//   //       <td>{user?.name}</td>
//   //       <td>{user?.email}</td>
//   //       <td>{/* <button onClick={() => deleteUser(user.id)}>🗑️</button> */}</td>
//   //     </tr>
//   //   ));
//   // };

//   return (
//     <div className="userCont">
//       <h1>USERS</h1>

//       <div className="userDiv">
//         <th>Nombre</th>
//         <th>Email</th>
//         <td>{newUsers?.username}</td>
//         <td>{newUsers?.email}</td>
//         <th>Acciones</th>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";

const Page = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // elimina un usuario por id
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="userCont">
      <h1>USERS</h1>
      <div className="userDiv">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Exportar el componente principal
export default Page;
