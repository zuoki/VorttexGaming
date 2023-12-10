"use client";
import "./panelAdmin.css";

// import { FaUser, FaThList } from "react-icons/fa";
// import { BiSolidCategory, BiSupport } from "react-icons/bi";
// import { MdDiscount, MdBuild } from "react-icons/md";
// import { LuLayoutPanelLeft } from 'react-icons/lu';
// import Link from 'next/link';

// const Page = () => {

//     const options = [
//         {
//             icon: 1,
//             data: "GAMES"
//         },
//         {
//             icon: 2,
//             data: "CATEGORIES"
//         },
//         {
//             icon: 3,
//             data: "USERS"
//         },
//         {
//             icon: 4,
//             data: "DISCOUNTS"
//         },
//         {
//             icon: 5,
//             data: "SUPPORT"
//         }
//     ];

//     // Mapeo de valores de icon a componentes de íconos correspondientes
//     const iconMapping = {
//         1: FaThList,
//         2: BiSolidCategory,
//         3: FaUser,
//         4: MdDiscount,
//         5: BiSupport
//     };

//     return (
//         <div className="panelAdminContainer">

//             <div className='iconAndTittlePanel' >
//                 <span><LuLayoutPanelLeft /></span>
//                 <h1>DASHBOARD ADMIN</h1>
//             </div>

//             <div className='optionsPanelContainer' >
//                 {
//                     options.map(option => {
//                         const IconComponent = iconMapping[option.icon];
//                         let clase = "optionPanel";
//                         if (option.icon == 4 || option.icon == 5) clase = "optionPanel last";
//                         return (
//                             <div key={option.icon} className={clase} >
//                                 <Link href={`/panelAdmin/${option.data.toLowerCase()}`} >
//                                     <div>
//                                         {IconComponent && <span className='iconPanel' ><IconComponent /></span>}
//                                         <p>{option.data}</p>
//                                     </div>
//                                 </Link>
//                             </div>
//                         );
//                     })
//                 }
//             </div>

//         </div>
//     );
// }

// export default Page;
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { FaUser, FaThList } from "react-icons/fa";
import { BiSolidCategory, BiSupport } from "react-icons/bi";
import { MdDiscount, MdBuild } from "react-icons/md";
import { LuLayoutPanelLeft } from "react-icons/lu";
import Link from "next/link";

const Page = () => {
  // const { roles } = useUser();
  const user = useUser();
  const roles = user?.publicMetadata;
  console.log("llllllllll", user?.publicMetadata);
  const router = useRouter();
  console.log(useUser);

  // Redirige a los usuarios que no son administradores a la página de inicio
/*   if (!roles.includes("Admin")) {
    router.push("/");
  } */
  const options = [
    {
      icon: 1,
      data: "GAMES",
    },
    {
      icon: 2,
      data: "CATEGORIES",
    },
    {
      icon: 3,
      data: "USERS",
    },
    {
      icon: 4,
      data: "DISCOUNTS",
    },
    {
      icon: 5,
      data: "SUPPORT",
    },
  ];

  // Mapeo de valores de icon a componentes de íconos correspondientes
  const iconMapping = {
    1: FaThList,
    2: BiSolidCategory,
    3: FaUser,
    4: MdDiscount,
    5: BiSupport,
  };

  return (
    <div className="panelAdminContainer">
      <div className="iconAndTittlePanel">
        <span>
          <LuLayoutPanelLeft />
        </span>
        <h1>DASHBOARD ADMIN</h1>
      </div>

      <div className="optionsPanelContainer">
        {options.map((option) => {
          const IconComponent = iconMapping[option.icon];
          let clase = "optionPanel";
          if (option.icon == 4 || option.icon == 5) clase = "optionPanel last";
          return (
            <div key={option.icon} className={clase}>
              <Link href={`/panelAdmin/${option.data.toLowerCase()}`}>
                <div>
                  {IconComponent && (
                    <span className="iconPanel">
                      <IconComponent />
                    </span>
                  )}
                  <p>{option.data}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
