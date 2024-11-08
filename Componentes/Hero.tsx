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
        <div className="flex flex-col justify-evenly items-center w-full">
          <div className="flex flex-col items-center lg:items-start lg:mt-10">
            <h1 className="text-3xl text-center px-1 lg:px-0 font-semibold lg:text-[64px] lg:w-[620px] lg:leading-none lg:text-start pb-7 font-['Audiowide']">
              Transforme Suas Compras em <span className="text-[#4A90E2]">Recompensas</span>
            </h1>
            <p className="text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[448px] lg:text-start pb-7">
              Funciona assim: a cada R$1 gasto, você ganha 1 ponto. Simples e vantajoso! Aproveite para acumular pontos e alcançar seus objetivos.
            </p>
            <button className="bg-[#4A90E2] lg:hover:bg-[#1456a3] lg:w-[70%] w-[55%] h-[50px] rounded-[10px] justify-center items-center lg:mb-7 font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(74,144,226,0.4)]">
              Cadastre-se e Ganhe Pontos!
            </button>
          </div>
        </div>

        <div className="flex bg-emerald-50 mt-5 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end">
          <div className="relative lg:flex md:w-[85%] hidden">
            <div
              ref={PontosRef}
              className={`absolute top-5 left-[-70px] bg-[rgba(64,64,66,0.4)] w-fit px-4 py-2 rounded-full text-white font-bold mt-72 flex border border-white border-opacity-50 transition-all duration-1000 ${
                PontosInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
            >
              <FaCheck className="text-[26px] pr-[10px]" />
              Você ganhou +50 pontos!
            </div>

            <div
              ref={PremiosRef}
              className={`absolute top-16 right-1 bg-[rgba(64,64,66,0.4)] w-fit px-4 py-2 rounded-full text-white font-bold mt-48 flex border border-white border-opacity-50 transition-all duration-1000 ${
                PremiosInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
              style={{ transitionDelay: PremiosInView ? "1s" : "0s" }}
            >
              <FaMedal className="text-[26px] pr-[10px]" />
              Prêmio disponível para troca!
            </div>

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
