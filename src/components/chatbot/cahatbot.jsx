import { useState,useEffect } from 'react';
import Image from 'next/image';
import vLogo from './chat.png';
import './chatbot.css';

const Chatbot = () => {
  const [vortixClass, setVortixClass] = useState('vortixOut');

  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.onload = () => {
          window.myLandbot = new Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2062115-VI3B9MT0WSIOUVGF/index.json',
          });
        };
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        document.body.appendChild(s);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  const toggleVortix = () => {
    setVortixClass(vortixClass === 'vortixOut' ? 'vortix' : 'vortixOut');
  };

  return (
    <div className='contenedorchatbotfix'>

    <div className='chatContainer'>
      <Image className={vortixClass} src={vLogo} alt='Chat Logo' />
      <div className="escondido" onClick={toggleVortix}>
          <h1>  HI VORT  </h1>
      </div>
    </div>
    </div>
  );
};

export default Chatbot;

