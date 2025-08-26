import { BellRing, HandHeart, MapPinned, Truck } from "lucide-react";
import type { CardProps } from "../../../interfaces/components/Card";

export interface aboutSectionProps {
    first: CardProps;
    second: CardProps;
    third: CardProps;
    fourth: CardProps;
}

export const aboutSectionData: aboutSectionProps = {
    first: {
        title: "Geolocalização",
        description: "Através da geolocalização em tempo real, monitoramos com precisão cada etapa da rota, garantindo que a comida seja entregue no endereço certo, no menor tempo possível. Isso permite mais agilidade, segurança e confiança tanto para quem doa quanto para quem recebe, fortalecendo a ponte entre solidariedade e eficiência.",
        icon: <MapPinned color="#000" size={40} />,
        width: "66%"
    },
    second: {
        title: "Notificações",
        description: "Sistema de notificações automáticas que mantém todos sempre atualizados e informados em tempo real.",
        icon: <BellRing color="#000" size={40} />,
        width: "33%"
    },
    third: {
        title: "Logística",
        description: "Com uma logística inteligente, facilitamos a conexão entre doadores e receptores de forma rápida e eficiente, garantindo que os alimentos cheguem ao destino certo no momento certo.",
        icon: <Truck color="#000" size={40} />,
        width: "33%"
    },
    fourth: {
        title: "Solidariedade urbana",
        description: "Acreditamos que cidades mais humanas começam pela empatia. Por isso, colocamos a solidariedade urbana no centro de tudo: ela guia nossas ações, conecta pessoas, reduz desigualdades e inspira soluções coletivas. Não se trata apenas de ajudar — trata-se de criar um ecossistema em que negócios, organizações e cidadãos atuam juntos para tornar os centros urbanos mais justos, sustentáveis e inclusivos.",
        icon: <HandHeart color="#000" size={40} />,
        width: "66%"
    }
}