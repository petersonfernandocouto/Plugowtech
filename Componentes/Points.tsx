import React from 'react';
import { TiShoppingCart } from "react-icons/ti";  //Card

import { FaTelegramPlane } from "react-icons/fa"; //Share

import { GiNetworkBars } from "react-icons/gi"; // Rede

import { GiCommercialAirplane } from "react-icons/gi"; //AirPlane

const Points = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className='flex text-center items-center lg:flex-row lg:justify-evenly gap-16'> {/* Div para Telas LG */}

        <div className='flex flex-col items-center relative'>

          <p className='text-[50px] font-[Audiowide]'>1</p>
          
          {/* Linha vertical */}
          <div className="border-l-2 border-gray-300 h-[60px] my-2"></div>

          <p className='text-[20px]'>Realize a compra<br /> nas lojas parceiras</p>

          {/* Linha vertical entre o segundo <p> e o ícone */}
          <div className="border-l-2 border-gray-300 h-[60px] mt-2"></div>
          
          <TiShoppingCart className='border-[4px] text-[85px] rounded-full p-4 bg-[#FE8C19]' />

        </div>
        
        <div className='flex flex-col items-center relative'>

        <FaTelegramPlane className='border-[4px] text-[85px] rounded-full p-4 bg-[#4A90E2]' />
        
          
          {/* Linha vertical */}
          <div className="border-l-2 border-gray-300 h-[60px] mb-2"></div>

          <p className='text-[20px]'>A loja informa a<br /> sua compra para<br /> compensar os pontos</p>

          {/* Linha vertical entre o segundo <p> e o ícone */}
          <div className="border-l-2 border-gray-300 h-[60px] mt-2"></div>

          <p className='text-[50px] font-[Audiowide]'>2</p>
          
          
          

        </div>
        
        <div className='flex flex-col items-center relative'>

        <p className='text-[50px] font-[Audiowide]'>3</p>
          
          {/* Linha vertical */}
          <div className="border-l-2 border-gray-300 h-[60px] my-2"></div>

          <p className='text-[20px]'>Acumule pontos <br /> 1 real  = 1 ponto <br /> <span className='text-[12px]'>para arquitetos e engenheiros</span> </p>

          {/* Linha vertical entre o segundo <p> e o ícone */}
          <div className="border-l-2 border-gray-300 h-[60px] mt-2"></div>
          
          <GiNetworkBars className='border-[4px] text-[85px] rounded-full p-4 bg-[#FE8C19]' />
          

        </div>




        <div className='flex flex-col items-center relative'>

        <GiCommercialAirplane className='border-[4px] text-[85px] rounded-full p-4 bg-[#4A90E2]' />
        
          
        {/* Linha vertical */}
        <div className="border-l-2 border-gray-300 h-[60px] mb-2"></div>

        <p className='text-[20px]'>Troque seus<br /> pontos por prêmios<br /> incríveis</p>

        {/* Linha vertical */}
        <div className="border-l-2 border-gray-300 h-[60px] mt-2"></div>

        <p className='text-[50px] font-[Audiowide]'>4</p>
          

        </div>




      </div>

    </div>
  )
}

export default Points;
