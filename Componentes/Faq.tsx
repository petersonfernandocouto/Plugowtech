  import React, { useState } from "react";
  import Background from "../IMG/faq.svg"
  import { url } from "inspector";

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
      
      <div style={{ 
          
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 10% ",
          backgroundRepeat: "no-repeat",
          width: "100%",
          
          padding: "20px 0",
          justifyContent: "center",
          alignItems: "center",
        
      }}
          >

          <div style={{ 
              textAlign: "center",
              fontSize: "24px", 
              fontWeight: "800",
              padding:"30px 0"
              }}>
              <h1> Pegruntas Frequentes </h1>
          </div>

        {faqs.map((faq, index) => (
          <div key={index} style={{ 
            marginBottom: "16px",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 

              }}>
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                width: "90%", 
                maxWidth: "800px", 
                cursor: "pointer",
                padding: "8px 16px",
                background: openIndex === index ? "#4A90E2" : "#FFF",
                color: openIndex === index ? "#FFF" : "#4A90E2",
                fontWeight: "600",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between", 
                alignItems: "center",
                transition: "all 0.2s",

              }}
            >
              <h4 style={{ margin: 0 }}>{faq.question}</h4>
              <span style={{ fontSize: "18px" }}>
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <div
                style={{
                  width: "90%", 
                  maxWidth: "800px", 
                  padding: "8px 16px",
                  background: "#4A90E2",
                  color: "#FFF",
                  borderRadius: "8px",
                  marginTop: "8px",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px", 
                  
                }}
              >
                <p style={{ margin: 0, }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  export default FAQ;
