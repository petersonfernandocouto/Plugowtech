import React from 'react';
import Image from 'next/image';
import PremiosIMG from '../IMG/PremiosIMG.png';
import premios from '../IMG/Premios.png';
import { FaTrophy } from 'react-icons/fa6';
import { GiPalmTree } from "react-icons/gi"; //Arvore
import { FaCheck} from "react-icons/fa"; //check
import { useInView } from "react-intersection-observer";

const Premios = () => {

  const { ref: ArvoreRef, inView: ArvoreInView } = useInView({ triggerOnce: true });
  const { ref: CheckRef, inView: CheckInView } = useInView({ triggerOnce: true });

  return (
    <div
      className="rounded-t-[20px] lg:rounded-t-[80px]"
      style={{
        backgroundImage: `url(${premios.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        overflow: 'visible',
      }}
    >
      <div
        id="Premios"
        className="bg-hero bg-cover flex flex-col items-center lg:flex-row-reverse lg:justify-evenly lg:items-end w-full"
      >
        {/* Div de Texto */}
        <div className="flex flex-col justify-evenly items-center w-full lg:mb-40 z-0">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[34px] mt-10 lg:mt-0 text-center px-1 font-semibold lg:text-[54px] 2xl:text-[60px] lg:w-[620px] lg:leading-none lg:text-start font-['Audiowide']">
              Ganhe Pontos nas
            </h1>
            <span className="text-[#FE8C19] text-[34px] text-center px-1 lg:px-0 font-semibold lg:text-[54px] 2xl:text-[60px] lg:w-[620px] lg:leading-none leading-3  lg:text-start pb-7 font-['Audiowide'] ">
              Lojas Parceiras
            </span>
            <p className="text-sm lg:text-lg 2xl:text-xl px-4 lg:px-0 text-center lg:w-[448px] lg:text-start pb-7">
              A cada compra nas lojas parceiras, você acumula pontos
              automaticamente. Quanto mais você gasta, mais pontos você ganha!
            </p>
            <button className="bg-[#FE8C19] lg:hover:bg-[#c46a10] lg:w-[70%] w-[95%] h-[50px] 2xl:w-[90%] 2xl:h-[60px] 2xl:text-2xl rounded-[10px] justify-center items-center mb-7 2xl:mb-40    font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(196,106,16,0.4)] flex">
              <FaTrophy className="mr-3" /> Veja os Prêmios Disponíveis
            </button>
          </div>
        </div>

        {/* Div da Imagem */}
        <div className="lg:block relative lg:-top-10 lg:mb-[-40px] z-10"> 

          <div  
            
              ref={ArvoreRef}
              className={`lg:hidden absolute right-1  bg-[rgba(64,64,66,0.4)] w-fit px-4  py-1 rounded-full  font-bold mt-[135px] flex border border-white border-opacity-50 transition-all duration-1000 ${
                ArvoreInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
            >
              <FaCheck className="text-[26px] pr-[10px] pb-1" />
              <p className="text-[13px] pt-1 lg:pt-0 lg:text-[16px]"> ganhe + de mil pontos!</p>

              

          </div>

          <div ref={CheckRef}
              className={`lg:hidden absolute top-[40px] right-1 bg-[rgba(64,64,66,0.4)] w-fit px-4 py-1 rounded-full font-bold mt-[138px]  mr-1 lg:mr-0 flex border border-white border-opacity-50 transition-all duration-1000 ${
                CheckInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
              style={{ transitionDelay: CheckInView ? "1s" : "0s" }}
            >
              <GiPalmTree className="text-[26px] pr-[10px]" />
              <p className="text-[13px] pt-1 lg:pt-0 lg:text-[16px]">Troque por viagens!</p>


            
          </div>

          <Image
            className="w-[1250px] h-[100%] 2xl:w-[1550px]"
            src={PremiosIMG}
            width={0}
            height={0}
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Premios;
