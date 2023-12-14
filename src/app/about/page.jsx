import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./about.css";
import Link from "next/link";
import ParticlesWall from "@/components/wallpeaper.jsx/ParticlesWall";

const About = () => {
  return (
    <div>
      <ParticlesWall />
      <div className="aboutCont">
        <h1 className="aboutTitle">VORTEX TEAM</h1>

        <div className="containCards">
          {/* Card 7 */}

          <div className="card">
            <div className="img-div">
              <img src="/dami.jpeg" alt="aboutSanti" />
            </div>

            <h2>Damian Diaz</h2>
            <p>
              A Passionate full-stack developer constantly seeking
              new opportunities to learn and grow. My dedication is focused on
              creating products that are not only functional but also appealing
              to users.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/diaz027`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/damian-diaz-6a7537258/`}
                className="linklinke"
                target="_blank"
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

            <h2>Jonathan Juarez</h2>
            <p>
              Hello! Im Jonathan G, and Im currently enrolled in the Henry
              coding bootcamp. Im passionate about programming and committed to
              expanding my skills in this exciting new field. Joining the
              bootcamp is a significant step for me.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/zuoki`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/gabriel-juarez-720998240/`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 4 */}

          <div className="card">
            <div className="img-div">
              <img src="/diego.jpeg" alt="aboutSanti" />
            </div>

            <h2>Diego Martins</h2>
            <p>
              Actualmente me encuentro cursando el bootcamp
              Soy Henry para seguir aprendiendo y desarrollando habilidades en
              lo que es esta nueva pasión que he descubierto, la programación.
            </p>

            <div className="icons">
              <Link
                href={`https://www.linkedin.com/in/diego-martins-563954278/`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://github.com/MartinsDiego17`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}

          <div className="card">
            <div className="img-div">
              <img src="/pablo.jpeg" alt="aboutPablo" />
            </div>

            <h2>Pablo Vera</h2>
            <p>
              I graduated with a degree in Connectivity and Networks
              Engineering, but I am currently steering my career towards
              development because I love this field. In this project i worked in
              the backend area.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/Topabli2`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/pablo-vera-744676161/`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>
          {/* Card 8 */}

          <div className="card">
            <div className="img-div">
              <img src="/debo.jpeg" alt="aboutSanti" />
            </div>

            <h2>Debora Rios</h2>
            <p>
              Hello!, a fullstack developer with a focus on backend, creative
              and motivated, Im always looking for new ways to learn and grow. I
              am passionate about creating products that are useful and
              attractive to users.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/RiosDeboraS`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/debora-sabrina-rios-307467284/`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 6 */}

          <div className="card">
            <div className="img-div">
              <img src="/andres.jpeg" alt="aboutSanti" />
            </div>

            <h2>Andres Castro</h2>
            <p>
              Hola! soy Andres y actualmente me encuentro cursando el bootcamp
              Soy Henry para seguir aprendiendo y desarrollando habilidades en
              lo que es esta nueva pasión que he descubierto, la programación.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/afradenburg`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/andres-castro-flechas-39a0ba186/`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}

          <div className="card">
            <div className="img-div">
              <img src="/cv_image.jpeg" alt="aboutSanti" />
            </div>

            <h2>Santiago Friedrich</h2>
            <p>
              Hola! soy Santiago y actualmente me encuentro cursando el bootcamp
              Soy Henry para seguir aprendiendo y desarrollando habilidades en
              lo que es esta nueva pasión que he descubierto, la programación.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/santiclfriedrich`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/santiago-martin-claros-friedrich-122323223/`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}

          <div className="card">
            <div className="img-div">
              <img src="/nata.jpeg" alt="aboutSanti" />
            </div>

            <h2>Christian Natale</h2>
            <p>
              A full-stack developer passionate about the world of programming, 
              with a strong focus on frontend development. 
              Currently, I work in IT support, but I am actively
              seeking opportunities to transition into a programming role.
            </p>

            <div className="icons">
              <Link
                href={`https://github.com/Chrisnatalx`}
                className="linkgit"
                target="_blank"
              >
                <FaGithub className="icon" />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/christian-natale-/`}
                className="linklinke"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
