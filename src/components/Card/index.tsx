import type { CardProps } from "../../interfaces/componentes/Card";

export default function Card({ title, description, icon, width }: CardProps) {
  return (
    <div className={`flex flex-col w-[${width}] h-full p-8 bg-white border-[#e4e4e4] shadow-lg rounded-[64px] gap-16 justify-between items-start`}>
      <div className="flex flex-row gap-4 items-center">
        {icon}
        <h5 className="font-semibold text-[32px] text-black">{title}</h5>
      </div>
      <p className="text-[20px] font-medium text-black">{description}</p>
    </div>
  );
}
