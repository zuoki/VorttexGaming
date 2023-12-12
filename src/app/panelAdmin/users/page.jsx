"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";
// // import { clerk, useUser } from "@clerk/nextjs";
// import { Clerk } from "@clerk/clerk-sdk-node";
// const clerk = new Clerk(process.env.CLERK_SECRET_KEY);

const Page = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const users = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const API_URL =
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_LOCAL
            : process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DEPLOY;
        const response = await axios(API_URL);
        setAllUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Función para eliminar un usuario por id

  const deleteUser = async (userId) => {
    try {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DELETE_LOCAL
          : p;
      const userDelete = await axios.delete(API_URL, {
        data: { userId },
      });
      console.log(userDelete);

      // const updatedUsers = allUsers.filter((user) => user.id !== userId);
      // setAllUsers(updatedUsers);
      // setFilteredUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
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
          className="searchInput"
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
                <td>
                  <a href={`/panelAdmin/users/${user.id}`}>{user.username}</a>
                </td>
                <td>
                  <a href={`/panelAdmin/users/${user.id}`}>{user.email}</a>
                </td>
                <td>
                  <button onClick={() => deleteUser(user.user_id)}>🗑️</button>
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
