"use client";

import React from "react";
import Sobre from "../../../ComponenteAcelera/Sobre";
import Partnership from "../../../ComponenteAcelera/Partnership";
import Footer from "../../../Componentes/Footer";
import Recompensas from "../../../ComponenteAcelera/Recompensas";
import PremiosAcelera from "../../../ComponenteAcelera/PremiosAcelera";
import { useInView } from "react-intersection-observer";

//Alterar nome deste export

export default function LoginPage() {
  const { ref: PartnershipRef, inView: PartnershipInView } = useInView({
    triggerOnce: true,
  });
  const { ref: PointsRef, inView: PointsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: PointsMobileRef, inView: PointsMobileInView } = useInView({
    triggerOnce: true,
  });
  const { ref: FooterRef, inView: FooterInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div>
        <Sobre />
      </div>

      <div
        id="Partnership"
        ref={PartnershipRef}
        className={`transition-all duration-1000 ease-out mb-1 ${
          PartnershipInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <Partnership />
      </div>

      <div
        id="PremiosAcelera"
        ref={PointsRef}
        className={`transition-all duration-1000 ease-out ${
          PointsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <PremiosAcelera />
      </div>

      <div
        id="Recompensas"
        ref={PointsMobileRef}
        className={`transition-all duration-1000 ease-out ${
          PointsMobileInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <Recompensas />
      </div>

      <div
        id="Recompensas"
        ref={FooterRef}
        className={`transition-all duration-1000 ease-out ${
          FooterInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}
