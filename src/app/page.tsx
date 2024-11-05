"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mt-0 pt-0">
        
        <nav className="flex justify-between items-center bg-[#404042] py-4 font-bold">
          {/* Links de navegação para telas grandes */}
          <div className="hidden lg:flex gap-20 lg:pl-20">
            <Link className="hover:text-gray-300" href="/">Home</Link>
            <Link className="hover:text-gray-300" href="/">Prêmios</Link>
            <Link className="hover:text-gray-300" href="/">Dashboard</Link>
          </div>

          {/* Link centralizado (agora à esquerda) */}
          <div className="text-2xl pl-4 lg:pl-0">
            <Link href="/">Plugowtech</Link>
          </div>

          {/* Links de navegação adicionais para telas grandes */}
          <div className="hidden lg:flex gap-20 lg:pr-20">
            <Link className="hover:text-gray-300" href="/">Lojas</Link>
            <Link className="hover:text-gray-300" href="/">FAQ</Link>
            <Link className="hover:text-gray-300" href="/">Criar Conta</Link>
          </div>

          {/* Ícone de menu para telas pequenas */}
          <div className="lg:hidden flex items-center pr-4">
            <button onClick={toggleMenu} className="p-2">
              <MenuIcon size={28} className="text-white" />
            </button>
          </div>
        </nav>

        {/* Menu suspenso para telas pequenas */}
        <div
          className={`lg:hidden flex flex-col bg-[#404042] text-center py-4 transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
          }`}
        >
          <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Home</Link>
          <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Prêmios</Link>
          <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Dashboard</Link>
          <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Lojas</Link>
          <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>FAQ</Link>
          <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Criar Conta</Link>
        </div>
      </div>
    </>
  );
}
