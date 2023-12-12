/* import  from ""; */
import Details from "@/components/details/Details";
import React from "react";
import Footer from "@/components/footer/footer";
import axios from "axios";
import "./page.css"

/* const URL_REQUESTS_GAMES = process.env.URL_REQUESTS_GAMES; */

const Page = async ({ params }) => {
/*   const response = await (
    `${URL_REQUESTS_GAMES}/${params.id}`
  ); */

  const URL = 'http://localhost:3000/api/games/';
  const { data } = await axios(`${URL}${params.id}`)

  return (
    <div>
      <Details game={data} />
      <Footer clasname="ffffffsa" />
    </div>
  );
};

export default Page;
