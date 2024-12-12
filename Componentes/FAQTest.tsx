import React from "react";


import Quest from '../IMG/FAQIMG/Quest_1.webp';
import QMPode from '../IMG/FAQIMG/QMpode_1.webp';
import Pontos from '../IMG/FAQIMG/Pontos_1.webp';
import Validar from '../IMG/FAQIMG/Time_1.webp';
import Travel   from '../IMG/FAQIMG/Travel_1.webp';
import Register  from '../IMG/FAQIMG/Register_1.webp';
import Acompanhar from '../IMG/FAQIMG/Acompanhar_1.webp';
import Transferir from '../IMG/FAQIMG/Transfer_1.webp';
import Segurity from '../IMG/FAQIMG/security_1.webp';
import Regaste from '../IMG/FAQIMG/rewards_1.webp'
import Menu from "./Menu";

import Image from "next/image";

import { useInView } from "react-intersection-observer";

function FAQTest() {

  const { ref: residentialRef, inView: residentialInView } = useInView({triggerOnce: true,});
  const { ref: commercialRef, inView: commercialInView } = useInView({triggerOnce: true,});
  const { ref: deepRef, inView: deepInView } = useInView({ triggerOnce: true });
  const { ref: WindowCleRef, inView: WindowCleInView } = useInView({triggerOnce: true,});

  const { ref: QuintoRef, inView: QuintoInView } = useInView({triggerOnce: true,});
  const { ref: SextoRef, inView: SextoInView } = useInView({triggerOnce: true,});
  const { ref: SetimoRef, inView: SetimoView } = useInView({ triggerOnce: true });
  const { ref: OitavoCleRef, inView: OitavoCleInView } = useInView({triggerOnce: true,});

  const { ref: NonoRef, inView: NonoInView } = useInView({ triggerOnce: true });
  const { ref: DecimoCleRef, inView: DecimoCleInView } = useInView({triggerOnce: true,});



  return (

    <div>


          <div className="lg:pt-7 lg:w-[95%] mx-auto">
                  <Menu />
          </div>

    

    <div className="flex flex-col justify-around items-center w-full  bg-cover lg:pt-10 pb-20">

      

      <div className="flex flex-col items-center w-full  mt-10 mb-10 lg:mb-0 ">

        <h1 className="text-center text-[34px] font-semibold py-5 px-1 lg:px-0 lg:text-[44px] 2xl:text-[68px] font-['Quantico'] ">
            Perguntas Frequentes
        </h1>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
          <div
            ref={residentialRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              residentialInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            } `}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px] "
              src={Quest}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">O que é o PARTNERSHIP?</h3>
              <p className=" text-lg">
              O PARTNERSHIP é um programa de fidelidade e recompensas criado para profissionais como arquitetos, engenheiros, designers, construtoras e consultores. Ele permite que você acumule pontos com suas compras em lojas parceiras e os troque por experiências exclusivas, como viagens, cruzeiros, workshops, entre outros benefícios.
              </p>
            </div>
          </div>

          <div
            ref={commercialRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              commercialInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: commercialInView ? "1s" : "0s" }} // nesta linha eu manipulo o delay. a div irá aparecer após 1 segundo em relação a div que vem antes
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={QMPode}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Quem pode participar do programa?</h3>
              <p className=" text-lg">
              Podem participar profissionais (como arquitetos, engenheiros e designers) e consultores que indicam projetos para lojas parceiras. Ambos acumulam pontos e têm acesso às recompensas do programa.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
          <div
            ref={deepRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              deepInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: deepInView ? "1s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Pontos}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Como acumulo pontos?</h3>
              <p className="text-lg">
              Você acumula pontos ao realizar compras nas lojas parceiras. Profissionais: Ganham 1 ponto para cada R$1,00 gasto. Consultores: Ganham 0,5 ponto para cada R$1,00 gasto.
              </p>
            </div>
          </div>

          <div
            ref={WindowCleRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
              WindowCleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: WindowCleInView ? "1.5s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Validar}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Por quanto tempo posso acumular pontos?</h3>
              <p className=" text-lg">
              Os pontos podem ser acumulados por até 18 meses, a partir da data em que foram gerados.
              </p>
            </div>

          </div>

        </div>
            
        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
          <div
            ref={QuintoRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                QuintoInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: QuintoInView ? "1s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Travel}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Quais tipos de recompensas posso resgatar?</h3>
              <p className="text-lg">
              O PARTNERSHIP oferece um catálogo exclusivo de recompensas, incluindo:Viagens nacionais, internacionais, Cruzeiros, Workshops e Promoções especiais em lojas parceiras
              </p>
            </div>
          </div>

          <div
            ref={SextoRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                SextoInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: SextoInView ? "1.5s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Register}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Como faço meu cadastro no programa?</h3>
              <p className=" text-lg">
              Você pode se cadastrar diretamente pelo site ou aplicativo do PARTNERSHIP. O processo é simples e rápido, exigindo apenas o preenchimento de um formulário online.
              </p>
            </div>

          </div>
          
          
        </div>

        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
          <div
            ref={SetimoRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                SetimoView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: SetimoView ? "1s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Acompanhar}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Como acompanho meus pontos e resgates?</h3>
              <p className=" text-lg">
              Você pode acompanhar o saldo de pontos, histórico de resgates e níveis de fidelidade no painel do site ou aplicativo do PARTNERSHIP. Além disso, notificações e campanhas personalizadas são enviadas por e-mail ou WhatsApp.
              </p>
            </div>
          </div>

          <div
            ref={OitavoCleRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                OitavoCleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: OitavoCleInView ? "1.5s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Transferir}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">É possível transferir meus pontos para outra pessoa?</h3>
              <p className=" text-lg">
                 Os pontos acumulados são pessoais e intransferíveis. Apenas o titular da conta pode utilizá-los para resgatar recompensas.
              </p>
            </div>

          </div>
          
        </div>

        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
          <div
            ref={NonoRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                NonoInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: NonoInView ? "1s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Segurity}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col items-start gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">É seguro usar o PARTNERSHIP?</h3>
              <p className=" text-lg">
              Sim! O PARTNERSHIP utiliza tecnologia avançada de criptografia para proteger seus dados e segue rigorosos controles de acesso. Você pode confiar na segurança do sistema para gerenciar seus pontos e recompensas.
              </p>
            </div>
          </div>

          <div
            ref={DecimoCleRef}
            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                DecimoCleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ transitionDelay: DecimoCleInView ? "1.5s" : "0s" }}
          >
            <Image
              className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
              src={Regaste}
              width={0}
              height={0}
              quality={100}
              alt="hero-img"
            />
            <div className="flex flex-col gap-4 px-4 pt-10 lg:px-0">
              <h3 className="text-xl font-bold">Como faço para resgatar minhas recompensas?</h3>
              <p className="text-lg">
              Você pode acessar o catálogo de recompensas pelo site, escolher a experiência desejada e confirmar o resgate. O processo é simples e totalmente online.
              </p>
            </div>

          </div>
          
        </div>





      </div>
    </div>

    </div>
  );
}

export default FAQTest;