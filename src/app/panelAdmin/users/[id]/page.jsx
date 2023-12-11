import axios from "axios";
import "./users.css";

const Page = async ({ params }) => {
  const URL = "http://localhost:3000/api/users/";
  const response = await axios(`${URL}${params.id}`);
  const user = response.data;
  console.log("holaaaaaaaaaaaa", user);

  return (
    <div className="usersDetails">
      <h1>{user[0].username}</h1>
      <p>Email: {user[0].email}</p>
      <p>Active: {user[0].active ? "Yes" : "No"}</p>
      <p>Create At: {user[0].createAt}</p>
      <p>Updated At: {user[0].updatedAt}</p>
      {user[0].licenses.length > 0 ? (
        user[0].licenses.map((license) => (
          <div key={license.id}>
            <p>Licencia: {license.name}</p>
            <p>Juego: {license.game.title}</p> {/* Acceder al título del juego */}
          </div>
        ))
      ) : (
        <p>El usuario no tiene licencias disponibles</p>
      )}
    </div>
  );
};
export default Page;
