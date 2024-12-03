import React from "react";
import Image from "next/image";
import HeroIMG from "../IMG/HeroIMG.png";
import BGHero from "../IMG/Hero.png";
import Menu from "./Menu";
import { FaCheck, FaMedal } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Hero = () => {

  // useInView para os elementos
  const { ref: PontosRef, inView: PontosInView } = useInView({ triggerOnce: true });
  const { ref: PremiosRef, inView: PremiosInView } = useInView({ triggerOnce: true });

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
        <div className="flex flex-col justify-evenly items-center w-full lg:mb-10 2xl:mb-52">
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <h1 className="text-[34px] text-center px-1 lg:px-0 font-semibold lg:text-[64px] 2xl:text-[68px] lg:w-[620px] leading-none lg:text-start pb-7 font-['Audiowide']">
            Transforme suas parcerias em <span className="text-[#4A90E2]">Experiências</span>
            </h1>
            <p className=" text-sm lg:text-lg 2xl:text-xl px-4 lg:px-0 text-center lg:w-[448px] lg:text-start pb-7">
              Funciona assim: a cada R$1 gasto, você ganha 1 ponto. Simples e vantajoso! Aproveite para acumular pontos e alcançar seus objetivos.
            </p>
            <button className="bg-[#4A90E2] lg:hover:bg-[#1456a3] lg:w-[70%] w-[95%] h-[50px] 2xl:w-[90%] 2xl:h-[60px] 2xl:text-2xl rounded-[10px] justify-center items-center lg:mb-7 font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(74,144,226,0.4)] ">
              Cadastre-se e Ganhe Pontos!
            </button>
          </div>
        </div>

        <div className="flex mt-5 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end">
          <div className="relative lg:flex md:w-[85%]  justify-end">
            <div
              ref={PontosRef}
              className={`absolute top-5 lg:left-[5px] 2xl:left-[300px] bg-[rgba(64,64,66,0.4)] w-fit px-4 lg:py-2 ml-1 lg:ml-0  py-1 rounded-full  font-bold mt-60 lg:mt-72 2xl:mt-[420px] flex border border-white border-opacity-50 transition-all duration-1000 ${
                PontosInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
            >
              <FaCheck className="text-[26px] pr-[10px] pb-1" />
              <p className="text-[13px] pt-1 lg:pt-0 lg:text-[16px]">Você ganhou +50 pontos!</p>
            </div>

            <div
              ref={PremiosRef}
              className={`absolute top-16 right-1 lg:right-[-25px] 2xl:right-[80px] bg-[rgba(64,64,66,0.4)] w-fit px-4 lg:py-2 py-1 rounded-full font-bold mt-32 lg:mt-48 2xl:mt-[320px] mr-1 lg:mr-0 flex border border-white border-opacity-50 transition-all duration-1000 ${
                PremiosInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
              style={{ transitionDelay: PremiosInView ? "1s" : "0s" }}
            >
              <FaMedal className="text-[26px] pr-[10px]" />
              <p className="text-[13px] pt-1 lg:pt-0 lg:text-[16px]">Viagem disponível para troca!</p>
            </div>

            <Image
              className="w-[auto] h-[440px] lg:w-[700px] lg:h-[540px] 2xl:w-[900px] 2xl:h-[740px] "
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
