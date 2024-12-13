import React from "react";
import { TiShoppingCart } from "react-icons/ti"; //Card
import { FaTelegramPlane } from "react-icons/fa"; //Share
import { GiNetworkBars } from "react-icons/gi"; // Rede
import { GiCommercialAirplane } from "react-icons/gi"; //AirPlane
import PointsBG from "../IMG/PointsBG.png";

const Points = () => {
  return (
    <div 
        style={{
          backgroundImage: `url(${PointsBG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          borderTopLeftRadius: '80px',
          borderTopRightRadius: '80px',
          overflow: 'visible' // Alterando para 'visible' para permitir a invasão do elemento
      }} 
      className="flex justify-center items-center min-h-screen ">
      <div className='flex text-center items-center lg:flex-row lg:justify-evenly gap-16 2xl:gap-48'> {/* Div para Telas LG */}

        <div className='flex flex-col items-center relative'>
          <p className='text-[50px] 2xl:text-[80px] font-[Audiowide]'>1</p>
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] my-2"></div>
          <p className="font-semibold text-[20px]  2xl:text-[30px]">
            Realize a compra
            <br /> nas lojas parceiras
          </p>
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] mt-2"></div>
          <TiShoppingCart className="border-[4px] text-[85px] 2xl:text-[120px] rounded-full p-4 bg-[#FE8C19]" />
        </div>
        <div className="flex flex-col items-center relative">
          <FaTelegramPlane className="border-[4px] text-[85px] rounded-full p-4 bg-[#4A90E2] 2xl:text-[120px]" />
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] mb-2"></div>
          <p className="font-semibold text-[20px]  2xl:text-[30px]">
            A loja informa a<br /> sua compra para
            <br /> compensar os pontos
          </p>
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] mt-2"></div>
          <p className='text-[50px] 2xl:text-[80px] font-[Audiowide]'>2</p>
        </div>
        
        <div className='flex flex-col items-center relative'>
          <p className='text-[50px] font-[Audiowide] 2xl:text-[80px]'>3</p>
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] my-2"></div>
          <p className="font-semibold text-[20px]  2xl:text-[30px]">
            Acumule pontos <br /> 1 real = 1 ponto <br />{" "}
            <span className="text-[12px] 2xl:text-[20px]">
              para arquitetos e engenheiros
            </span>{" "}
          </p>
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] mt-2"></div>
          <GiNetworkBars className="border-[4px] text-[85px] rounded-full p-4 bg-[#FE8C19] 2xl:text-[120px]" />
        </div>
        <div className="flex flex-col items-center relative">
          <GiCommercialAirplane className="border-[4px] text-[85px] rounded-full p-4 bg-[#4A90E2] 2xl:text-[120px]" />
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] mb-2"></div>
          <p className="font-semibold text-[20px]  2xl:text-[30px]">
            Troque seus
            <br /> pontos por 
            <br /> viagens incríveis
          </p>
          <div className="border-l-2 2xl:border-l-[7px] border-gray-300 h-[60px] mt-2"></div>
          <p className='text-[50px] 2xl:text-[80px] font-[Audiowide] '>4</p>
        </div>
      </div>
    </div>
  );
};

export default Points;
