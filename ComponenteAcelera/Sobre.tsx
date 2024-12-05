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
        id="hero"
        className="bg-hero bg-cover flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
      >
        <div className="flex flex-col justify-evenly items-center w-full lg:mb-20 2xl:mb-52">
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <h1 className="text-[30px] text-center px-1 lg:px-0 font-semibold lg:text-[59px] lg:w-[600px] lg:leading-[65px] lg:text-start pb-7 font-['Audiowide']">
              <span className="text-[#4A90E2]">Multiplique</span> <span className="ml-2">seus</span> <br />
              pontos com as <br />
              promoções do <br />
              <span className="text-[#4A90E2]">Programa</span> <span className="ml-2 text-[#4A90E2]">Acelera</span>
            </h1>
            <button className="bg-[#4A90E2] lg:hover:bg-[#1456a3] lg:w-[70%] w-[95%] h-[50px] 2xl:w-[90%] 2xl:h-[60px] 2xl:text-2xl rounded-[10px] justify-center items-center lg:mb-7 font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(74,144,226,0.4)] ">
              Cadastre-se e Ganhe Pontos!
            </button>
          </div>
        </div>

        <div className="flex mt-5 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end">
          <div className="relative lg:flex md:w-[85%]  justify-end">
            

            <Image
              className="w-[auto] h-[440px] lg:w-[700px] lg:h-[540px] 2xl:w-[900px] 2xl:h-[740px]"
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
