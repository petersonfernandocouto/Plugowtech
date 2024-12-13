import React from 'react'
import Agencia from '../IMG/Agencia.png'

const Recompensas = () => {
  return (
    <div
      className='rounded-t-[20px] lg:rounded-t-[80px] lg:rounded-b-[80px] rounded-b-[20px]  '
      style={{
        backgroundImage: `url(${Agencia.src})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center 50%', 
        backgroundRepeat: 'no-repeat', 
        width: '100%',
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '50px 0', 
        
      }}
      
    >

                      <div className='flex flex-col justify-evenly items-center border py-10 px-5 rounded-[50px] bg-[rgba(3,3,3,0.8)] mx-4 2xl:w-[55%]'>

                      <div className="flex flex-col items-center">
                      <h1 className="text-3xl text-center px-1 font-semibold lg:text-[54px] 2xl:text-[58px] lg:w-[620px] lg:leading-none font-['Quantico']">
                        Entre para o Partnership
                        <span className="text-[#4A90E2] text-3xl text-center font-semibold lg:text-[54px] lg:w-[620px]  font-['Quantico'] pl-[10px]">
                        Connect!
                      </span>
                      </h1>

                      <p className="text-base lg:text-lg 2xl:text-xl px-4 lg:px-0 text-center lg:w-[448px] lg:text-start pt-10 pb-10">
                        Cadastre-se agora e comece a acumular pontos
                        para trocar por experiências incríveis!
                      </p>
                      <button className="bg-[#4A90E2] lg:hover:bg-[#1456a3] w-[70%] h-[50px] 2xl:w-[90%] 2xl:h-[60px] 2xl:text-2xl rounded-[10px] justify-center items-center font-semibold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:shadow-[0px_8px_10px_-2px_rgba(74,144,226,0.4)] flex">
                        Cadastre-se agora!
                      </button>
                      </div>

                      </div>

        
      
    </div>
  )
}

export default Recompensas
