import Link from 'next/link';
import './not-found.css'

const NotFoundPage = () => {
  return (
    <div className='notfCont'>
      <h1 className='notfTitle' >Lo sentimos, ha ocurrido un error.</h1>
      <p className='notfP' >La página que estás buscando no existe o no se encuentra disponible en este momento.</p>
      <Link href="/" className='notfLink' >

        <p>Volver al inicio</p>
       
      </Link>

    <div className='gifCont' >
        <img className='gif' src='/error404.gif' alt='gif' />
    </div>
    

      
    </div>
  );
};

export default NotFoundPage;