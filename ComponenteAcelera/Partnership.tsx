import React from 'react'
import PartBG from '../IMG/PartBG.png'
import Image from 'next/image';
import MENPart from '../IMG/MENPART.png'

const Partnership = () => {
  return (
    <div
      className="shadow-[0px_0px_60px_10px_rgba(74,144,226,0.5)] flex items-center"
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
          className="w-[300px] lg:w-[450px] h-auto rounded-[50px] shadow-[0px_0px_60px_10px_rgba(255,255,255,0.5)]"
          src={MENPart}
          width={0}
          height={0}
          alt="hero-img"
        />

        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[70px]">
          <h1 className="text-3xl font-semibold font-['Audiowide'] mb-28">
            O que é o <br></br> Acelera Partnership?
          </h1>
          <p className="text-base lg:text-lg px-4 lg:px-0 font-bold mb-20">
            O <span className="text-[#4A90E2]">Acelera</span> é um programa de promoções dentro do Partnership que permite ao usuário <span className="text-[#4A90E2]">multiplicar</span> o acúmulo de pontos de acordo com as regras específicas de cada <span className="text-[#4A90E2]">promoção</span>. Além disso, ao atingir as metas estabelecidas, é possível obter <span className="text-[#4A90E2]">recompensas incríveis.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Partnership
