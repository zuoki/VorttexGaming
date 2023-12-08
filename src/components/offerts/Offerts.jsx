import Link from "next/link";
import "./offerts.css";
const Offerts = ({ games }) => {

  console.log(games)

  const img = "imgOffert";
  const imgClass = [
    "allImg primerImagen",
    "allImg segundaImagen",
    "allImg tercerImagen",
  ];

  return (
    <div className="offertsGrid">
      {games &&
        games.map(
          (game, index) =>
            game && (
              <Link key={game.id} href={`/details/${game.id}`}>
                <div
                  key={game.id}
                  className={`${img} ${game.developer.split(" ")[0]} hola`}
                >
                  <img src={game.image} className={imgClass[index]} />{" "}
                  {/* Movido fuera del div .offertDetail */}
                  <div className="offertDetail">
                    <p className="offert">${game?.price}</p>
                  </div>
                  <div className="hoverDetails">
                    <h4 className="titleGame">{game.title}</h4>
                  </div>
                </div>
              </Link>
            )
        )}
    </div>
  );
};

export default Offerts;
