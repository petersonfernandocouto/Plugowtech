import React from 'react'

import { TiShoppingCart } from "react-icons/ti";  //Card

import { FaTelegramPlane } from "react-icons/fa"; //Share

import { GiNetworkBars } from "react-icons/gi"; // Rede

import { GiCommercialAirplane } from "react-icons/gi"; //AirPlane

const PointsMobile = () => {

  return (

    <div className='flex flex-col justify-center items-center min-h-screen'>
      
      
            <div className='flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%]'>

                <TiShoppingCart className='border-[2px] text-[73px] rounded-full p-4 bg-[#FE8C19] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>Realize a compra<br /> nas lojas parceiras</p>


            </div>


            <div className='flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%]'>

                <FaTelegramPlane className='border-[2px] text-[73px] rounded-full p-4 bg-[#4A90E2] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>A loja informa a<br /> sua compra para<br /> compensar os pontos</p>

                
            </div>


            <div className='flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%]'>

                
                <GiNetworkBars className='border-[2px] text-[73px] rounded-full p-4 bg-[#FE8C19] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>Acumule pontos <br /> 1 real  = 1 ponto <br /> <span className='text-[14px]'>para arquitetos e engenheiros</span> </p>


            </div>
            

            <div className='flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%]'>

                
                <GiCommercialAirplane className='border-[2px] text-[73px] rounded-full p-4 bg-[#4A90E2] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>Troque seus<br /> pontos por prêmios<br /> incríveis</p>
                

            </div>



    </div>
  )
}

export default PointsMobile
