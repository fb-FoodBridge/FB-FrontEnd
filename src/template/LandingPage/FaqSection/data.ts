import type { FaqSectionProps } from "../../../interfaces/template/FaqSection";

export const faqSectionData: FaqSectionProps = {
  categorys: [
    {
      label: "Restaurantes",
      type: "restaurant",
    },
    {
      label: "Organizações",
      type: "organization",
    },
    {
      label: "Doações",
      type: "donation",
    },
  ],
  faqs: [
    {
      answer:
        "Utilizamos geolocalização e agendamento inteligente para conectar quem tem excedentes com quem precisa — sempre considerando proximidade, urgência e capacidade logística.",
      question: "Como a FoodBridge conecta doadores e instituições?",
      type: "donation",
    },
    {
      answer:
        "Após o cadastro, você poderá buscar alimentos disponíveis próximos à sua localização, agendar coletas e acompanhar todas as doações em tempo real. Tudo de forma transparente, segura e organizada.",
        question: "Tenho uma ONG. Como posso receber doações?",
        type: "organization",
      },
      {
        answer:
          "É simples! Basta se cadastrar na plataforma, registrar os alimentos excedentes com tipo, validade e quantidade, e pronto — instituições próximas serão notificadas automaticamente para agendar a coleta.",
        question: "Sou um restaurante. Como posso doar alimentos?",
        type: "restaurant",
      },
      {
        answer:
          "Você pode agendar horários de retirada compatíveis com a rotina do seu restaurante, garantindo que a doação não atrapalhe o funcionamento.",
        question: "Como funciona o agendamento das coletas?",
        type: "restaurant",
      },
      {
      answer:
        "Sim. A plataforma foi projetada para atender tanto organizações grandes quanto pequenas, garantindo que todos tenham acesso às doações de forma justa.",
      question: "Minha organização é pequena. Posso participar?",
      type: "organization",
    },
    {
      answer:
        "Você terá acesso a relatórios com informações sobre volume, frequência e tipos de doações recebidas. Isso ajuda na prestação de contas e na transparência da ONG.",
      question: "A plataforma fornece relatórios sobre doações recebidas?",
      type: "organization",
    },
    {
      answer:
        "Sim, basta informar sua área de atuação no cadastro. Assim, priorizamos notificações de doações alinhadas com o público que você atende.",
      question:
        "Posso definir quais tipos de alimentos minha organização aceita?",
      type: "organization",
    },
    {
      answer:
        "Não há custo para organizações receberem alimentos. O objetivo da plataforma é fortalecer o impacto social, sem onerar as ONGs cadastradas.",
      question: "Existe algum custo para minha organização participar?",
      type: "organization",
    },

    {
      answer:
        "Não há cobrança para restaurantes cadastrarem seus excedentes. Nosso objetivo é facilitar doações e evitar o desperdício de alimentos.",
      question: "Existe algum custo para os restaurantes?",
      type: "restaurant",
    },
    {
      answer:
        "Aceitamos alimentos preparados, embalados, secos ou refrigerados, desde que estejam em boas condições e dentro do prazo de validade.",
      question: "Quais tipos de alimentos posso doar?",
      type: "restaurant",
    },
    {
      answer:
        "Sim, você terá acesso ao histórico de doações, incluindo datas, tipos de alimentos e organizações beneficiadas.",
      question: "Posso acompanhar o histórico das minhas doações?",
      type: "restaurant",
    },

    {
      answer:
        "Sim! Levamos a privacidade a sério. Seus dados são protegidos por protocolos de segurança e usados apenas para garantir o bom funcionamento da plataforma.",
      question: "É seguro cadastrar meus dados na plataforma?",
      type: "donation",
    },
    {
      answer:
        "Aceitamos alimentos em boas condições de consumo, dentro do prazo de validade e com informações básicas sobre conservação. Produtos prontos, embalados, secos ou refrigerados são bem-vindos.",
      question: "Quais tipos de alimentos podem ser doados?",
      type: "donation",
    },
    {
      answer:
        "Sim, você pode acompanhar o trajeto da doação e confirmar quando a coleta for realizada pela instituição beneficiada.",
      question: "Posso acompanhar o status da minha doação?",
      type: "donation",
    },
    {
      answer:
        "Se um alimento estiver próximo da validade, a plataforma prioriza instituições que possam utilizá-lo rapidamente, evitando desperdício.",
      question: "O que acontece se meus alimentos estiverem perto de vencer?",
      type: "donation",
    },
  ],
};
