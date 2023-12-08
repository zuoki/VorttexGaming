/* import  from ""; */
import Details from "@/components/details/Details";
import React from "react";
import Footer from "@/components/footer/footer";
import axios from "axios";

const URL_REQUESTS_GAMES = process.env.URL_REQUESTS_GAMES;

const Page = async ({ params }) => {
  const response = await (
    `${URL_REQUESTS_GAMES}/${params.id}`
  );

  return (
    <div>
      <Details game={response.data[0]} />
      <Footer />
    </div>
  );
};

export default Page;
