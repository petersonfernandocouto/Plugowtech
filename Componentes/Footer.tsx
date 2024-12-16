import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParceiroOne from "../IMG/Parceiro1.png";
import ParceiroTwo from "../IMG/Parceiro2.png";

const Footer = () => {
  return (
    <div className="bg-[#121212]">
      <div className="lg:flex lg:justify-evenly pt-8 lg:pt-20">
        <div className="flex gap-32">
          <div className="pl-2 lg:pl-0">
            <h1 className="text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px]">
              Partnership
            </h1>

            <div className="mt-4">
              <ul className="list-none">
                <li>
                  <Link
                    className="hover:text-gray-300 transition-colors duration-300"
                    href="/"
                  >
                    Início
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-gray-300 transition-colors duration-300"
                    href="/login"
                  >
                    Acelera
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-gray-300 transition-colors duration-300"
                    href="/FAQ"
                  >
                    Perguntas
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px]">
              Ajuda
            </h1>

            <div className="mt-4">
              <ul className="list-none">
                <li>
                  <Link
                    className="hover:text-gray-300 transition-colors duration-300"
                    href="/FAQ"
                  >
                    Perguntas Frequentes
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-300 transition-colors duration-300"
                    href="https://api.whatsapp.com/send/?phone=%2B5511986950878&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-16 mt-10 lg:mt-0">
          <div className="pl-1 lg:pl-0">
            <h1 className="text-[20px] font-bold border-b-2 border-b-[#4A90E2] w-[60px] whitespace-nowrap">
              Lojas parceiras
            </h1>

            <div className="lg:flex gap-2 mt-4">
              <a
                href="https://onehouseambientes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={ParceiroOne} alt="Error" />
              </a>

              <a
                href="https://www.instagram.com/grupomaxi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={ParceiroTwo} alt="Error" className="mt-4 lg:mt-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-20 pb-2">
        © Partnership 2024. Todos os direitos reservados.
      </h1>
    </div>
  );
};

export default Footer;
