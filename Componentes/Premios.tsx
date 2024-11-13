import React from 'react';
import Image from 'next/image';
import PremiosIMG from '../IMG/PremiosIMG.png';
import premios from '../IMG/Premios.png';
import { FaTrophy } from 'react-icons/fa6';

const Premios = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${premios.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center 10%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        borderTopLeftRadius: '80px',
        borderTopRightRadius: '80px',
        overflow: 'visible' // Alterando para 'visible' para permitir a invasão do elemento
      }}
    >
      <div
        id="Premios"
        className="bg-hero bg-cover flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
      >
        <div className="hidden lg:block relative -top-10 mb-[-40px] z-10"> 
          <Image
            className="w-[1250px] h-[100%]"
            src={PremiosIMG}
            width={0}
            height={0}
            alt="hero-img"
          />
        </div>

        <div className="flex flex-col justify-evenly items-center w-full lg:mb-40 z-0">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl text-center px-1 font-semibold lg:text-[54px] lg:w-[620px] lg:leading-none lg:text-start font-['Audiowide']">
              Ganhe Pontos nas
            </h1>
            <span className="text-[#FE8C19] text-3xl text-center px-1 lg:px-0 font-semibold lg:text-[54px] lg:w-[620px] lg:leading-none lg:text-start pb-7 font-['Audiowide']">
              Lojas Parceiras
            </span>
            <p className="text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[448px] lg:text-start pb-7">
              A cada compra nas lojas parceiras, você acumula pontos automaticamente. Quanto mais você gasta, mais pontos você ganha!
            </p>
            <button className="bg-[#FE8C19] lg:hover:bg-[#c46a10] lg:w-[70%] w-[55%] h-[50px] rounded-[10px] justify-center items-center lg:mb-7 font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(196,106,16,0.4)] flex">
              <FaTrophy className="mr-3" /> Veja os Prêmios Disponíveis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premios;
