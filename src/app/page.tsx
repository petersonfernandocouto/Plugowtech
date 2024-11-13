"use client";

import Hero from "../../Componentes/Hero";
import Premios from "../../Componentes/Premios";
import Points from "../../Componentes/Points";
import PointsMobile from "../../Componentes/PointsMobile";
import Invitation from "../../Componentes/invitation";

export default function Home() {
  return (
    <>

      

      <div>

        <Hero />

      </div>

      <div>

        <Premios />

      </div>

      <div className="hidden lg:block">

        <Points />

      </div>

      <div className=" lg:hidden">

        <PointsMobile />

      </div>

      <div>

        <Invitation />

      </div>




    </>



  );
}
