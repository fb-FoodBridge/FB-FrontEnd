import { LayoutDashboard, Mail, Users } from "lucide-react";
import type { MenuHamburguerProps } from "../../interfaces/components/MenuHamburguer";

export const navData: MenuHamburguerProps["options"][] = [
  {
    label: "Sobre nós",
    href: "",
    icon: <Users size={24} color="#fff" />,
  },
  {
    label: "Perguntas frequentes",
    href: "",
    icon: <LayoutDashboard size={24} color="#fff" />,
  },
  {
    label: "Contato",
    href: "",
    icon: <Mail size={24} color="#fff" />,
  },
];