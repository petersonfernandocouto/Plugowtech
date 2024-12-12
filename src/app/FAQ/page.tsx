"use client";

import FAQTest from '../../../Componentes/FAQTest';
import Footer from '../../../Componentes/Footer';
import Loader from '../../../Componentes/Loader';
import { useEffect, useState } from "react";

import React from 'react'


const Page = () => {

  const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
          // Aqui estou simulando um atraso no carregamento para exibir o loader
          const timer = setTimeout(() => {
            setIsLoading(false);
          }, 2000); // tempo de 2 segundos de espera

          return () => clearTimeout(timer);
        }, []);

        if (isLoading) {
          return <Loader />;
        }

  return (

    <div>

            <div>

                <FAQTest />

            </div>
            
            <div>

                <Footer />

            </div>



    </div>
  )
}

export default Page
