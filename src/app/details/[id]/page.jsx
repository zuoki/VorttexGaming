// /* import  from ""; */
"use client";
import Details from "@/components/details/Details";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";
import axios from "axios";
import Loader from "@/components/loader/Loader";

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
    </div>
  );
};

export default Page;
