import Link from 'next/link';
import './offerts.css';
import { data } from '@/app/api/data';

const Offerts = ({ games }) => {

    const gamesInOffert = data.filter(game => game.price > 55.98);
    const img = 'imgOffert';
    const imgClass = ["allImg primerImagen", "allImg segundaImagen", "allImg tercerImagen"]

    return (
        <div className='offertsGrid'>
            {
                games.map((game, index) => (
                    <Link href={`/details/${game.id}`}>
                        <div key={game.id} className={`${img} ${game.developer.split(' ')[0]} hola`}>
                            <img src={game.image} className={imgClass[index]} /> {/* Movido fuera del div .offertDetail */}
                            <div className='offertDetail'>
                                <p className='offert' >${game?.price}</p>
                            </div>
                            <div className='hoverDetails'>
                                <h4 className='titleGame'>{game.title}</h4>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Offerts
