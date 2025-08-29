import type { OptionCategoryProps } from "../../interfaces/components/OptionCategory";

export default function OptionCategory({ ...props }: OptionCategoryProps) {
  return (
    <div
      onClick={props.onClick}
      className={` cursor-pointer text-white ${props.isSelected ? "bg-[#FFB74D]" : "bg-[#212121]"} flex items-center justify-center rounded-4xl h-fit w-fit p-3`}
    >
      <p className="font-medium text-[16px]">{props.label}</p>
    </div>
  );
}
