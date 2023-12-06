"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";

const Page = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios("/api/users");
        setAllUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Función para eliminar un usuario por id
  const deleteUser = (userId) => {
    const updatedUsers = allUsers.filter((user) => user.id !== userId);
    setAllUsers(updatedUsers);
    if (searchTerm) {
      const updatedFilteredUsers = filteredUsers.filter(
        (user) => user.id !== userId
      );
      setFilteredUsers(updatedFilteredUsers);
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filtrar la lista de usuarios en función del término de búsqueda
    const filteredUsers = allUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="userCont">
      <h1>USERS</h1>
      <div className="searchContainer">
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="search by username"
        />
      </div>
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
            {filteredUsers.map((user) => (
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

export default Page;
