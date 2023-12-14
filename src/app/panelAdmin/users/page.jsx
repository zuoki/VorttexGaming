"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./users.css";

const Page = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

      // const updatedUsers = allUsers.filter((user) => user.id !== userId);
      // setAllUsers(updatedUsers);
      // setFilteredUsers(updatedUsers);
      Swal.fire({
        title: "Do you want to delete this user?",
        text: "You won't be able to revert this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      });
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
