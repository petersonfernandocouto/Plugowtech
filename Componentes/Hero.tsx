import React from "react";
import Image from "next/image";
import HeroIMG from "../IMG/HeroIMG.png";
import BGHero from '../IMG/Hero.png';
import Menu from "./Menu";
import { FaCheck } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BGHero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <div className="lg:mt-7 lg:w-[95%] mx-auto">
        <Menu />
      </div>

      <div
        id="hero"
        className="bg-hero bg-cover flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
      >
        <div className="flex flex-col justify-evenly items-center w-full">
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <h1 className="text-3xl text-center px-1 lg:px-0 font-semibold lg:text-[64px] lg:w-[620px] lg:leading-none lg:text-start lg:pb-7">
              Transforme Suas Compras em <span className="text-[#4A90E2]">Recompensas</span>
            </h1>
            <p className="text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[448px] lg:text-start lg:pb-7">
              Funciona assim: a cada R$1 gasto, você ganha 1 ponto. Simples e vantajoso! Aproveite para acumular pontos e alcançar seus objetivos.
            </p>
            <button className="bg-[#4A90E2] w-[80%] h-[50px] rounded-[10px] justify-center items-center lg:mb-7">
              Cadastre-se e Ganhe Pontos!
            </button>
          </div>
        </div>

        <div className="flex bg-emerald-50 mt-5 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end">
          <div className="relative lg:flex md:w-[85%] hidden ">
            
            
              <p className="absolute top-5 left-[-70px] bg-[rgba(64,64,66,0.4)] w-fit px-4 py-2 rounded-full text-white font-bold mt-72 flex">
              <FaCheck className="" />
              Você ganhou +50 pontos!
              </p>
              <p className="absolute top-16 right-1 bg-[rgba(64,64,66,0.4)] w-fit px-4 py-2 rounded-full text-white font-bold mt-48 flex">
              <FaMedal />
              Prêmio disponível para troca!
              </p>
            
             
            <Image
              className="w-[700px] h-[540px]"
              src={HeroIMG}
              width={0}
              height={0}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
