import React from 'react'

import { TiShoppingCart } from "react-icons/ti";  //Card

import { FaTelegramPlane } from "react-icons/fa"; //Share

import { GiNetworkBars, GiCommercialAirplane } from "react-icons/gi"; // Rede + AirPlane


import PointsBG from '../IMG/PointsBG.png'

import { useInView } from "react-intersection-observer";

const PointsMobile = () => {

    const { ref: CardRef, inView: CardInView } = useInView({ triggerOnce: true });
    const { ref: ShareRef, inView: ShareInView } = useInView({ triggerOnce: true });
    const { ref: RedeRef, inView: RedeInView } = useInView({ triggerOnce: true });
    const { ref: AirPlaneRef, inView: AirPlaneInView } = useInView({ triggerOnce: true });

  return (

    <div 
        style={{
            backgroundImage:`url(${PointsBG.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center 10%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            borderTopLeftRadius: '80px',
            borderTopRightRadius: '80px',
            overflow: 'visible' // Alterando para 'visible' para permitir a invasão do elemento
        }}    
        className='flex flex-col justify-center items-center min-h-screen'>
      
      
            <div
                ref={CardRef}
                className={`flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%] transition-all duration-1000 ${
                CardInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
            >

                <TiShoppingCart className='border-[2px] text-[73px] rounded-full p-4 bg-[#FE8C19] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>Realize a compra<br /> nas lojas parceiras</p>


            </div>


            <div 
                ref={ShareRef}
                className={`flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%] transition-all duration-1000 ${
                ShareInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}>

                <FaTelegramPlane className='border-[2px] text-[73px] rounded-full p-4 bg-[#4A90E2] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>A loja informa a<br /> sua compra para<br /> compensar os pontos</p>

                
            </div>


            <div 
                ref={RedeRef}
                className={`flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%] transition-all duration-1000 ${
                RedeInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}>

                
                <GiNetworkBars className='border-[2px] text-[73px] rounded-full p-4 bg-[#FE8C19] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>Acumule pontos <br /> 1 real  = 1 ponto <br /> <span className='text-[14px]'>para arquitetos e engenheiros</span> </p>


            </div>
            

            <div 
                ref={AirPlaneRef}
                className={`flex flex-col items-center my-10 border bg-[#2F2F30] p-8 rounded-[14px] w-[70%] transition-all duration-1000 ${
                AirPlaneInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}>

                
                <GiCommercialAirplane className='border-[2px] text-[73px] rounded-full p-4 bg-[#4A90E2] relative -top-16' />

                <p className='-mt-5 mb-5 text-[20px] font-semibold'>Troque seus<br /> pontos por prêmios<br /> incríveis</p>
                

            </div>



    </div>
  )
}

export default PointsMobile