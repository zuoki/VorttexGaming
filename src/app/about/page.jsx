import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./about.css";
import Link from "next/link";
import ParticlesWall from "@/components/wallpeaper.jsx/ParticlesWall";

const About = () => {
  return (
    <>
      <ParticlesWall />
      <div className="aboutCont">
        <h1 className="aboutTitle">VORTEX TEAM</h1>

        <div className="containCards">
          {/* Card 7 */}

          <div className="card">
            <div className="img-div">
              <img src="/nata.jpeg" alt="aboutSanti" />
            </div>

            <h2>Nata</h2>
            <p>
              Hello! I'm Christian Natale, and currently, I'm undertaking the
              Soy Henry bootcamp to continue learning and developing skills in
              this newfound passion for programming that I've discovered.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/Chrisnatalx`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/christian-natale-/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 8 */}

          <div className="card">
            <div className="img-div">
              <img src="/diego.jpeg" alt="aboutSanti" />
            </div>

            <h2>Diego</h2>
            <p>
              Hello! I'm Diego Martins, a Full Stack Junior Developer currently
              immersed in the Soy Henry bootcamp. I'm on a journey to expand my
              knowledge and refine my skills in the captivating world of
              programming.
            </p>

            <div className="icons">
              <Link
                href={`https://www.linkedin.com/in/diego-martins-563954278/`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://github.com/MartinsDiego17`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>
          {/* Card 5 */}

          <div className="card">
            <div className="img-div">
              <img src="/jona.png" alt="aboutSanti" />
            </div>

            <h2>Jonathan</h2>
            <p>
              Hello! I'm Jonathan Gabriel J, a Full Stack Junior Developer
              currently immersed in the Soy Henry bootcamp. I'm on a journey to
              expand my knowledge and refine my skills in the captivating world
              of programming.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/zuoki`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/gabriel-juarez-720998240/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 6 */}

          <div className="card">
            <div className="img-div">
              <img src="/cv_image.jpeg" alt="aboutSanti" />
            </div>

            <h2>Santiago Friedrich</h2>
            <p>
              Hello! I'm Santiago F, a Frontend Developer in the making, deeply
              engaged in the Soy Henry bootcamp. My journey involves a
              commitment to ongoing learning and skill refinement.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/santiclfriedrich`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/santiago-martin-claros-friedrich-122323223/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>
          {/* Card 1 */}

          <div className="card">
            <div className="img-div">
              <img src="/dami.jpeg" alt="aboutSanti" />
            </div>

            <h2>Dami</h2>
            <p>
              Hello! I'm Damian D, currently immersed in the Soy Henry bootcamp,
              dedicated to advancing my skills as a Backend Developer. I'm
              passionate about learning and honing.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/diaz027`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/damian-diaz-6a7537258/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}

          <div className="card">
            <div className="img-div">
              <img src="/debo.jpeg" alt="aboutSanti" />
            </div>

            <h2>Debo</h2>
            <p>
            Hello! I'm Sabrina , currently immersed in the Soy Henry bootcamp,
              dedicated to advancing my skills as a Backend Developer. I'm
              passionate about learning and honing.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/RiosDeboraS`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/debora-sabrina-rios-307467284/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}

          <div className="card">
            <div className="img-div">
              <img src="/pablo.jpeg" alt="aboutSanti" />
            </div>

            <h2>Pablo</h2>
            <p>
            Hello! I'm Pablo V, currently immersed in the Soy Henry bootcamp,
              dedicated to advancing my skills as a Backend Developer. I'm
              passionate about learning and honing.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/Topabli2`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/pablo-vera-744676161/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 4 */}

          <div className="card">
            <div className="img-div">
              <img src="/andres.jpeg" alt="aboutSanti" />
            </div>

            <h2>Andres</h2>
            <p>
            Hello! I'm Andres S, currently immersed in the Soy Henry bootcamp,
              dedicated to advancing my skills as a Backend Developer. I'm
              passionate about learning and honing.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/afradenburg`}
                className="linkgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/andres-castro-flechas-39a0ba186/`}
                className="linklinke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
