import React, { useState } from 'react';
import { MenuIcon } from "lucide-react";
import Link from "next/link";


function Menu() {
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
    <div className="mt-0 pt-0">
      <nav className="flex justify-between items-center bg-[rgba(64,64,66,0.4)] py-4 lg:rounded-full px-0">
        {/* Links de navegação para telas grandes */}
        <div className="hidden lg:flex gap-[120px] lg:pl-20 md:pl-0">
          <Link className="hover:text-gray-300 transition-colors duration-300" href="/">Home</Link>
          <Link className="hover:text-gray-300 transition-colors duration-300" href="/">Prêmios</Link>
          <Link className="hover:text-gray-300 transition-colors duration-300" href="/">Dashboard</Link>
        </div>

        {/* Link centralizado (agora à esquerda) */}
        <div className="text-2xl pl-4 lg:pl-0 font-bold text-white tracking-wider md:ml-4 md:mr-4">
          <Link href="/">Plugowtech</Link>
        </div>

        {/* Links de navegação adicionais para telas grandes */}
        <div className="hidden lg:flex gap-[120px] lg:pr-20">
          <Link className="hover:text-gray-300 transition-colors duration-300" href="/">Lojas</Link>
          <Link className="hover:text-gray-300 transition-colors duration-300" href="/">Cadastrar</Link>
          <Link className="hover:text-gray-300 transition-colors duration-300" href="/login">Sobre</Link>

        </div>

        {/* Ícone de menu para telas pequenas */}
        <div className="lg:hidden flex items-center pr-4">
          <button 
            onClick={toggleMenu} 
            className={`p-2 transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"} hover:scale-110`}
          >
            <MenuIcon size={28} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Menu suspenso para telas pequenas */}
      <div
        className={`lg:hidden flex flex-col bg-[rgba(64,64,66,0.2)] text-center py-4 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 " : "max-h-0 opacity-0"}`}
      >
        <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Home</Link>
        <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Prêmios</Link>
        <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Dashboard</Link>
        <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Lojas</Link>
        <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Cadastrar</Link>
        <Link className="hover:text-gray-300 py-2" href="/" onClick={() => closeMenuOnClick("#")}>Sobre</Link>
      </div>
    </div>
  );
}

export default Menu;
