// /* import  from ""; */
import Details from "@/components/details/Details";
import React from "react";
import Footer from "@/components/footer/footer";
import axios from "axios";

const URL_REQUESTS_GAMES = process.env.URL_REQUESTS_GAMES;

const Page = async ({ params }) => {
  const response = await axios(`${URL_REQUESTS_GAMES}/${params.id}`);

  return (
    <div>
      <Details game={response} />
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
