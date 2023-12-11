"use client";
import React, { useEffect } from "react";
import "./Buy.css";
import ButtonComponent from "@/components/utils/button_Component/ButtonComponent";
// import { useStoreCart, useStoreGame } from '@/zustand/store';
import Link from "next/link";

// const Buy = ({ game }) => {
//   const { gamesInCart, addGamesToCart } = useStoreCart();

//   const handleCart = (game) => {
//     addGamesToCart(game);
//   }

//   return (
//     <section className='Dbuy'>

//       <div className='Dbuy2'>
//         <h2 className='DBof'> CURRENT OFFER</h2>
//         <div className='priceContainerD'>
//           <h1 className='DBPRC'>BUY FOR : ${game.price}</h1>
//         </div>
//         <div className='butonDBJContainer'>
//           <button type='button' className='ADC' onClick={() => handleCart(game)} >  ADD TO CART</button>
//           <Link href={'/cart'}><button type='button' className='IAC'>GO TO CART</button></Link>
//         </div>
//       </div>

//     </section>
//   )
// }

// export default Buy

// import React from 'react';
import { useStoreCart } from "@/zustand/store";
// import Link from 'next/link';
import { useUser } from "@clerk/nextjs";

const Buy = ({ game }) => {
  const { addGamesToCart, userId, setUserId } = useStoreCart();
  const user = useUser();

  // Storage NO TOCAR
  useEffect(() => {
    if (user && user.user && user.user.id !== userId) {
      setUserId(user.user.id);
    }
  }, [user]);

  const handleCart = () => {
    if (user?.isSignedIn) {
      addGamesToCart(game);
    } else {
      window.location.href = "/sign-in"; // Redirige al usuario a la página de registro
    }
  };

  return (
    <section className="Dbuy">
      <div className="Dbuy2">
        <h2 className="DBof"> CURRENT OFFER</h2>
        <div className="priceContainerD">
          <h1 className="DBPRC">BUY FOR: ${game.price}</h1>
        </div>
        <div className="butonDBJContainer">
          <button type="button" className="ADC" onClick={handleCart}>
            ADD TO CART
          </button>

          {user?.isSignedIn ? (
            <Link href="/cart">
              <button type="button" className="IAC">
                GO TO CART
              </button>
            </Link>
          ) : (
            <button type="button" className="IACDISABLED" disabled>
              GO TO CART
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Buy;
