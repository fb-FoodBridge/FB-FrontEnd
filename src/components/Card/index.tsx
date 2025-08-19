import type { CardProps } from "../../interfaces/componentes/Card";

export default function Card({ title, description, icon, width }: CardProps) {
  return (
    <div className={`flex flex-col w-[${width}] h-[411px] p-6 bg-[#e4e4e4] shadow-lg rounded-[64px] gap-4 justify-between items-center`}>
      <div className="flex flex-row gap-2 items-center">
        {icon}
        <h5 className="font-semibold text-[32px] text-black">{title}</h5>
      </div>
      <p className="text-[16px] font-medium text-black">{description}</p>
    </div>
  );
}
