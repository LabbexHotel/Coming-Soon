import discordLogo from "./Discord-Logo-White.png";
import FacebookLogo from "./facebook.png";
import { motion } from "framer-motion";

export default () => {
  return (
    <div className="Proximamente">
      <div className="Container">
        <motion.img
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          src="https://cdn.jsdelivr.net/gh/LabbexHotel/CDN@main/LogoCompuesto.png"
          alt="Logo"
        />
        <motion.h1
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: .2
          }}
        >
          Proximamente
        </motion.h1>
        <motion.h2
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: .4,
            duration: 0.7,
          }}
        >
          Actualmente nos encontramos en fase de desarrollo
        </motion.h2>
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: .6,
            duration: 0.7,
          }}
          className="ButtonsSocial"
        >
          <a
            href="https://discord.labbex.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discordLogo} alt="" />
          </a>
          <a
            href="https://www.facebook.com/LabbexHotel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                filter: "invert(1)",
              }}
              src={FacebookLogo}
              alt=""
            />
          </a>
        </motion.div>
      </div>
      <motion.a
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
            duration: 0.7,
        }}
        className="ButtonPowered"
        href="https://pixidev.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered Pixi<span>dev</span>
      </motion.a>
    </div>
  );
};
