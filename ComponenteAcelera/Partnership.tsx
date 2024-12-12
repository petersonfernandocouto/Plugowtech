import React, { useState } from 'react';
import PartBG from '../IMG/MENPARTTWO.png';
import Image from 'next/image';
import MENPart from '../IMG/MENPART.png';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Partnership = () => {
  const [showMainContent, setShowMainContent] = useState(true);
  const [showLeftButtons, setShowLeftButtons] = useState(false);

  return (
    <div
      className="shadow-[inset_0px_2px_20px_0px_rgba(74,144,226,1)] flex items-center"
      style={{
        backgroundImage: `url(${PartBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center 10%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        borderBottomLeftRadius: "80px",
        borderBottomRightRadius: "80px",
        overflow: "visible",
        padding: "40px 20px",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-center w-full max-w-6xl mx-auto gap-10">
        <Image
          className="w-[300px] lg:w-[450px] h-auto rounded-[50px] shadow-[5px_5px_0px_0px_rgba(74,144,226,1)]"
          src={MENPart}
          width={0}
          height={0}
          alt="hero-img"
        />

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl font-semibold font-['Quantico'] mb-10 lg:mb-20 lg:ml-10">
            O que é o <br /> Acelera Partnership?
          </h1><
          {showMainContent ? (
            <div className="flex gap-2  2xl:gap-10 lg:ml-10">
              <p className="text-base lg:text-lg px-4 lg:px-0 font-bold mb-20">
                O <span className="text-[#4A90E2]">Acelera</span> é um programa de promoções dentro do Partnership que permite ao usuário <span className="text-[#4A90E2]">multiplicar</span> o acúmulo de pontos de acordo com as regras específicas de cada <span className="text-[#4A90E2]">promoção</span>. Além disso, ao atingir as metas estabelecidas, é possível obter <span className="text-[#4A90E2]">recompensas incríveis.</span>
              </p>
              <button
                className="mb-20 text-[25px] lg:hover:text-gray-500"
                onClick={() => {
                  setShowMainContent(false);
                  setShowLeftButtons(true);
                }}
              >
                <FaChevronRight />
              </button>
            </div>
          ) : null}

          {showLeftButtons ? (
            <div className="flex items-center gap-4">
              <button
                className="lg:block hidden text-[25px] lg:hover:text-gray-500 lg:mb-20"
                onClick={() => {
                  setShowMainContent(true);
                  setShowLeftButtons(false);
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                className="lg:hidden mb-20 text-[25px] lg:hover:text-gray-500"
                onClick={() => {
                  setShowMainContent(true);
                  setShowLeftButtons(false);
                }}
              >
                <FaChevronLeft />
              </button>
              <p className="text-base lg:text-lg px-4 lg:px-0 font-bold mb-20">
                Cada promoção dentro do <span className="text-[#4A90E2]">Acelera</span> tem suas próprias regras, informando quantos pontos você irá ganhar por real gasto. Diferente do Partnership, as promoções do Acelera oferecem a possibilidade de <span className="text-[#4A90E2]">multiplicar o acúmulo de pontos.</span> Algumas promoções também podem incluir metas que, ao serem atingidas, proporcionam experiências incríveis, sem a necessidade de utilizar os pontos já acumulados.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Partnership;
