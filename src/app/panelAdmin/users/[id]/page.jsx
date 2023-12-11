import axios from "axios";
import "./users.css";
import ParticlesWall from "@/components/wallpeaper.jsx/ParticlesWall";

const Page = async ({ params }) => {
  const URL = "http://localhost:3000/api/users/";
  const response = await axios(`${URL}${params.id}`);
  const user = response.data;
  console.log("holaaaaaaaaaaaa", user);

  return (
    <>
    <ParticlesWall/>
    <div className="usersDetails">
      <div>
      <h1>{user[0].username}</h1>

      </div>

      <p>Email: {user[0].email}</p>
      <p>Active: {user[0].active ? "Yes" : "No"}</p>
      <p>Create At: {user[0].createAt}</p>
      <p>Updated At: {user[0].updatedAt}</p>
      {user[0].licenses.length > 0 ? (
        <p> licencias {user[0].licenses}</p>
      ) : (
        <p> licencias: "el usuario no tiene licencias disponibles" </p>
      )}
    </div>
    </>
  );
};
export default Page;
