"use client";

import React from "react";
import Sobre from "../../../ComponenteAcelera/Sobre";
import Partnership from "../../../ComponenteAcelera/Partnership";
import Footer from "../../../Componentes/Footer";
import Recompensas from "../../../ComponenteAcelera/Recompensas";
import PremiosAcelera from '../../../ComponenteAcelera/PremiosAcelera';

//Alterar nome deste export

export default function LoginPage() {
  return (

    <div>

              <div>

              <Sobre />

              </div>

              <div className="mb-1">

              <Partnership />

              </div>

              <div>

                <PremiosAcelera />

              </div>

              <div>

                <Recompensas />

              </div>

              <div>

              <Footer />

              </div>



    </div>

    



  );
}
