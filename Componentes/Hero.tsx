import React from "react";
import Image from "next/image";
import BHC from "../IMG/HeroIMG.png";


const Hero = () => {
  

  return (
    <div
      id="hero"
      className="bg-hero bg-cover flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
    >
      <div className="flex flex-col justify-evenly items-center w-full border">
        <div className="flex flex-col items-center lg:items-start lg:mt-10">
          <h1 className="text-3xl text-center px-1 lg:px-0 font-semibold lg:text-[52px] lg:w-[563px] lg:leading-none lg:text-start">
            Transforme Suas Compras em <span className="text-[#4A90E2]"> Recompensas  </span>
          </h1>
          <p className="mt-5 text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[448px] lg:text-start">
            Funciona assim: a cada R$1 gasto, você ganha 1 ponto. Simples e vantajoso! Aproveite para acumular pontos e alcançar seus objetivos.
          </p>

          <button className="bg-[#4A90E2]  w-full h-[50px] rounded-2xl justify-center items-center">Cadastre-se e Ganhe Pontos!</button>
         
        </div>
      </div>

      <div className="flex bg-emerald-50 mt-5 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end border">
        <div className="flex md:w-1/2">
          <Image
            className="w-[200px] lg:w-[500px] h-full"
            src={BHC}
            width={0}
            height={0}
            alt="hero-img"
          />
        </div>

       
      </div>
    </div>
  );
};

export default Hero;