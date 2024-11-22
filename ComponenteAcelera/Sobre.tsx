import React from 'react'
import Menu from '../Componentes/Menu'
import Image from "next/image";
import SobreIMG from "../IMG/SobreIMG.png";
import Noise from "../IMG/Noise&Texture.png";

const Sobre = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Noise.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="lg:pt-7 lg:w-[95%] mx-auto">
        <Menu />
      </div>

      <div
        id="Sobre"
        className="flex flex-col lg:flex-row"
      >
        <div className="flex flex-col justify-evenly items-center w-full lg:mb-10">
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <h1 className="text-[30px] text-center px-1 lg:px-0 font-semibold lg:text-[59px] lg:w-[600px] lg:leading-[65px] lg:text-start pb-7 font-['Audiowide']">
              <span className="text-[#4A90E2]">Multiplique</span> <span className="ml-2">seus</span> <br />
              pontos com as <br />
              promoções do <br />
              <span className="text-[#4A90E2]">Programa</span> <span className="ml-2 text-[#4A90E2]">Acelera</span>
            </h1>
            <button className="bg-[#4A90E2] lg:hover:bg-[#1456a3] lg:w-[70%] w-[55%] h-[50px] rounded-[10px] justify-center items-center lg:mb-7 font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(74,144,226,0.4)]">
              Cadastre-se e Ganhe Pontos!
            </button>
          </div>
        </div>

        <div className="flex mt-5 lg:mt-0 w-full justify-end">
          <div className="relative lg:flex">
            <Image
              className="w-[750px] h-[550px]"
              src={SobreIMG}
              width={0}
              height={0}
              alt="hero-img"
              
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre
