import React from 'react'
import Menu from '../Componentes/Menu'
import Image from "next/image";
import SobreIMG from "../IMG/SobreIMG.png";
import BGHero from "../IMG/Hero.png";

const Login = () => {




  return (
    <div
      style={{
        backgroundImage: `url(${BGHero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center 10%",
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
        <div className="flex flex-col justify-evenly items-center w-full lg:mb-10">
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
          <h1 className="text-[30px] text-center px-1 lg:px-0 font-semibold lg:text-[64px] lg:w-[600px] lg:leading-none lg:text-start pb-7 font-['Audiowide']">
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

        <div className="flex bg-emerald-50 mt-5 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end">
          <div className="relative lg:flex md:w-[85%] hidden">
            <Image
              className="w-[700px] h-[540px]"
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

export default Login
