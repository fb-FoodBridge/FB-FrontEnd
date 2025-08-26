import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { OptionFaqProps } from "../../interfaces/components/OptionFaq";

export default function OptionFaq({ ...props }: OptionFaqProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full h-fit gap-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>

      <div className="w-full h-[1px] rounded-full bg-[#212121]"></div>

      <div className="w-full flex gap-4 justify-between py-3 ">
        <p className="font-medium text-[16px]">{props.question}</p>
        <ChevronDown
          size={24}
          color="#000"
          className={`transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <div className={`w-full h-[1px] ${isOpen ? 'hidden' : 'rounded-full'} bg-[#212121]`}></div>

      {isOpen && (
        <p className="text-[#212121] text-[16px] mb-2">{props.answer}</p>
      )}
    </div>
  );
}
