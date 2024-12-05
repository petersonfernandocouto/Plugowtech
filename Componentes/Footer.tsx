import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {


  return (

    <div className='bg-[#121212]'>

    <div className='lg:flex lg:justify-evenly pt-10 lg:pt-20'>

        <div className='flex  gap-16'>

            <div className='pl-5 lg:pl-0'>

                <h1 className='text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px]'>Partnership</h1>

                <div className='mt-4'>
                    <ul className="list-disc list-inside">
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Sobre Nós</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Termos de Uso</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Política de Privacidade</Link></li>                        
                    </ul>
                </div>


            </div>



            <div>

                <h1 className='text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px]'>Ajuda</h1>

                <div className='mt-4'>
                    <ul className="list-disc list-inside">
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">FAQ / Ajuda</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Contato</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Histórico de pontos</Link></li>                        
                    </ul>
                </div>
                
            </div>
        </div>
        
        <div className='flex gap-16 mt-10 lg:mt-0'>

            <div className='pl-5 lg:pl-0'>

                <h1 className='text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px] whitespace-nowrap'>Links úteis</h1>

                
                <div className='mt-4'>
                    <ul className="list-disc list-inside">
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Home</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Catálogo de Prêmios</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Lojas Parceiras</Link></li>
                        <li><Link className="hover:text-gray-300 transition-colors duration-300" href="/">Contato</Link></li>                     
                    </ul>
                </div>
                

            </div>



            <div>

                <h1 className='text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px] whitespace-nowrap'>Siga-nos</h1>

                <div>
                <ul className="flex gap-4 mt-4">
        
                        <a
                            href="https://api.whatsapp.com/send/?phone=5511986950878&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li>
                            <FaWhatsapp size={32} className="hover:text-[#0bfc03]" />
                            </li>
                        </a>
                        <a
                            href="https://www.instagram.com/osniwellington/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li>
                            <FaInstagram size={32} className="hover:text-[#FE0F8B]" />
                            </li>
                        </a>
                        
                        <a
                            href="https://www.facebook.com/osni.wellington"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li>
                            <FaFacebookF size={32} className="hover:text-[#4A90E2]" />
                            </li>
                        </a>
                        </ul>
                </div>
                
            </div>

        </div>    





    </div>

    <h1 className='text-center mt-20'>© Partnership 2024. Todos os direitos reservados.</h1>
    </div>

  )
}

export default Footer
