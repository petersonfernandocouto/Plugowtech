import React, { useState } from "react";
//import Background from "../IMG/faq.svg";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "O que é o PARTNERSHIP?",
    answer: "O PARTNERSHIP é um programa de fidelidade e recompensas criado para profissionais como arquitetos, engenheiros, designers, construtoras e consultores. Ele permite que você acumule pontos com suas compras em lojas parceiras e os troque por experiências exclusivas, como viagens, cruzeiros, workshops, entre outros benefícios.",
  },
  {
    question: "Quem pode participar do programa?",
    answer: "Podem participar profissionais (como arquitetos, engenheiros e designers) e consultores que indicam projetos para lojas parceiras. Ambos acumulam pontos e têm acesso às recompensas do programa.",
  },
  {
    question: "Como acumulo pontos?",
    answer: "Você acumula pontos ao realizar compras nas lojas parceiras:\n- **Profissionais**: Ganham 1 ponto para cada R$1,00 gasto.\n- **Consultores**: Ganham 0,5 ponto para cada R$1,00 gasto.",
  },
  {
    question: "Por quanto tempo posso acumular pontos?",
    answer: "Os pontos podem ser acumulados por até 18 meses, a partir da data em que foram gerados.",
  },
  {
    question: "Quais tipos de recompensas posso resgatar?",
    answer: "O PARTNERSHIP oferece um catálogo exclusivo de recompensas, incluindo:\n- Viagens nacionais e internacionais\n- Cruzeiros\n- Workshops\n- Promoções especiais em lojas parceiras",
  },
  {
    question: "Como faço meu cadastro no programa?",
    answer: "Você pode se cadastrar diretamente pelo site ou aplicativo do PARTNERSHIP. O processo é simples e rápido, exigindo apenas o preenchimento de um formulário online.",
  },
  {
    question: "Como acompanho meus pontos e resgates?",
    answer: "Você pode acompanhar o saldo de pontos, histórico de resgates e níveis de fidelidade no painel do site ou aplicativo do PARTNERSHIP. Além disso, notificações e campanhas personalizadas são enviadas por e-mail ou WhatsApp.",
  },
  {
    question: "É possível transferir meus pontos para outra pessoa?",
    answer: "Os pontos acumulados são pessoais e intransferíveis. Apenas o titular da conta pode utilizá-los para resgatar recompensas.",
  },
  {
    question: "É seguro usar o PARTNERSHIP?",
    answer: "Sim! O PARTNERSHIP utiliza tecnologia avançada de criptografia para proteger seus dados e segue rigorosos controles de acesso. Você pode confiar na segurança do sistema para gerenciar seus pontos e recompensas.",
  },
  {
    question: "Como faço para resgatar minhas recompensas?",
    answer: "Você pode acessar o catálogo de recompensas pelo site, escolher a experiência desejada e confirmar o resgate. O processo é simples e totalmente online.",
  },
  {
    question: "O que é o 'Acelera Partnership'?",
    answer: "São campanhas promocionais personalizadas oferecida aos participantes do programa, trazendo oportunidades exclusivas para acelerar o acúmulo de pontos e acessar benefícios especiais.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full bg-cover bg-center py-10"
      style={{
        // Retirar a Imagem? backgroundImage: `url(${Background.src})`,
      }}
    >
      <h1 className="text-center text-[34px] font-semibold py-5 px-1 lg:px-0 lg:text-[44px] 2xl:text-[68px] font-['Quantico']">
        Perguntas Frequentes
      </h1>
      <div className="flex flex-col items-center ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full max-w-3xl flex flex-col items-center"
          >
            {/* Question */}
            <div
              onClick={() => toggleFAQ(index)}
              className={`w-[80%] lg:w-[85%] 2xl:w-[100%] px-4 py-3 flex justify-between items-center rounded-lg cursor-pointer 
              ${
                openIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              } transition duration-300 ease-in-out shadow-md`}
            >
              <h4 className="font-semibold text-sm lg:text-lg 2xl:text-xl">{faq.question}</h4>
              <span className="text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out 
              ${openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} 
              w-[80%] lg:w-[85%] bg-blue-500 text-white rounded-lg px-4 py-3 mt-2 mb-2`}
              style={{
                transition: "opacity 0.5s ease, max-height 0.5s ease",
              }}
            >
              <p className="text-sm whitespace-pre-wrap">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
