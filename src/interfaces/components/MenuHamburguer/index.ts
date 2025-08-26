export interface MenuHamburguerProps {
  options: {
    label: string;
    href: string;
    icon: React.ReactNode;
  };
}

export interface MenuHamburguerCloseProps {
  onClose?: () => void;
}