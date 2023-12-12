"use client";
import { useStoreCart } from "@/zustand/store";
import "./cart.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "@/components/emptyCartt/EmptyCart";
import { useUser } from "@clerk/nextjs";
import ParticlesWall from "@/components/wallpeaper.jsx/ParticlesWall";
import { useEffect } from "react";
import Loader from "@/components/loader/Loader";

const Page = () => {
  const { gamesInCart, removeGameFromCart, emptyCart, setUserId, userId, data } =
    useStoreCart();

  let subtotal = 0;
  gamesInCart.forEach((game) => {
    subtotal += game.price;
  });

  const removeGame = (event) => {
    event.preventDefault();
  };

  const handlerCartEmpty = (event) => {
    event.preventDefault();
    emptyCart();
  };
  // Storage NO TOCAR
  const user = useUser();
 

  useEffect(() => {
    if (user && user.user && user.user.id !== userId) {
      setUserId(user.user.id);
    }
  }, [user]);

  if (user && user.user) {
    const user_id = user.user.id;
    const email = user.user.primaryEmailAddress.emailAddress;
  } else {
    console.log("No user is authenticated");
  }

  if(!user.isSignedIn) return <Loader />

  return (
    <>
      <ParticlesWall />
      <div className="cartContainer">
        <div className="cartContainerGames">
          {gamesInCart.length > 0 ? (
            gamesInCart.map((game) => (
              <div className="cartGame" key={game.id}>
                <img src={game.image} />
                <p>{game.title}</p>
                {/*<p>Cantidad: {game.id}</p>*/}
                <p>Precio: ${game.price}</p>

                <FontAwesomeIcon
                  icon={faTrash}
                  className="subtotal"
                  style={{ color: "#ff5757" }}
                  onClick={() => {
                    removeGame, removeGameFromCart(game.id);
                  }}
                />
              </div>
            ))
          ) : (
            <EmptyCart />
          )}
        </div>

        <div className="cartContainerDetails">
          <h4>
            TOTAL
            <hr /> <p>${subtotal.toFixed(2)}</p>
          </h4>
          <Link href="/payment">
            <button className="firstButton" disabled={subtotal == 0}>
              Ir a pagar
            </button>
          </Link>
          <button onClick={handlerCartEmpty}>Vaciar carrito</button>
          <Link href="/">
            <button className="lastButton">Seguir comprando</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
