import type { CardProps } from "../../interfaces/components/Card";

export default function Card({ title, description, icon, width }: CardProps) {
  return (
    <div className={`flex flex-col w-[${width}] min-h-[330px] max-h-330px p-8 bg-[#fafafa] border-2 border-[#e4e4e4] shadow-lg rounded-[64px] gap-16 items-start`}>
      <div className="flex flex-row gap-4 items-center">
        {icon}
        <h5 className="font-semibold text-[32px] text-black">{title}</h5>
      </div>
      <p className="text-[20px] font-medium text-black">{description}</p>
    </div>
  );
}
