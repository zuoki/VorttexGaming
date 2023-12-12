// /* import  from ""; */
"use client";
import Details from "@/components/details/Details";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";
import axios from "axios";
import Loader from "@/components/loader/Loader";

// const URL_REQUESTS_GAMES = process.env.URL_REQUESTS_GAMES;

const Page = ({ params }) => {
  const [games, setGames] = useState({});

  useEffect(() => {
    const fetchData = () => {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
          : process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
      axios(`${API_URL}/${params.id}`)
        .then((response) => {
          console.log(response);
          setGames(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    fetchData();
  }, []);
  if (!games.id) {
    return Loader;
  }

  return (
    <div>
      <Details game={games} />
      <Footer />
    </div>
  );
};

export default Page;

// import Details from "@/components/details/Details";
// import React from "react";
// import Footer from "@/components/footer/footer";
// import axios from "axios";

// // Asegúrate de que la variable de entorno esté definida en tu archivo .env
// const URL_REQUESTS_GAMES = process.env.URL_REQUESTS_GAMES;

// const Page = async ({ params }) => {
//   // Utiliza la variable de entorno para construir la URL
//   const response = await axios(`${URL_REQUESTS_GAMES}/${params.id}`);

//   return (
//     <div>
//       <Details game={response.data} />
//       <Footer />
//     </div>
//   );
// };

// export default Page;
