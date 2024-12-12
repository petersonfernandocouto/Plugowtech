"use client";

import Hero from "../../Componentes/Hero";
import Premios from "../../Componentes/Premios";
import Points from "../../Componentes/Points";
import PointsMobile from "../../Componentes/PointsMobile";
import Invitation from "../../Componentes/Invitation";
import Footer from "../../Componentes/Footer";
import Loader from "../../Componentes/Loader";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: PremiosRef, inView: PremiosInView } = useInView({
    triggerOnce: true,
  });
  const { ref: PointsRef, inView: PointsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: PointsMobileRef, inView: PointsMobileInView } = useInView({
    triggerOnce: true,
  });
  const { ref: InvitationRef, inView: InvitationInView } = useInView({
    triggerOnce: true,
  });
  const { ref: FooterRef, inView: FooterInView } = useInView({
    triggerOnce: true,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando atraso no carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // tempo de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <Hero />
      </div>

      <div
        id="PremiosSection"
        ref={PremiosRef}
        className={`transition-all duration-1000 ease-out ${
          PremiosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Premios />
      </div>

      <div
        id="PointsSection"
        ref={PointsRef}
        className={`transition-all duration-1000 ease-out hidden lg:block ${
          PointsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Points />
      </div>

      <div
        id="PointsMobileSection"
        ref={PointsMobileRef}
        className={`transition-all duration-1000 ease-out lg:hidden ${
          PointsMobileInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <PointsMobile />
      </div>

      <div
        id="InvitationSection"
        ref={InvitationRef}
        className={`transition-all duration-1000 ease-out ${
          InvitationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Invitation />
      </div>

      <div
        id="FooterSection"
        ref={FooterRef}
        className={`transition-all duration-1000 ease-out ${
          FooterInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Footer />
      </div>
    </>
  );
}
