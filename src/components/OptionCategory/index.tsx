import type { OptionCategoryProps } from "../../interfaces/componentes/OptionCategory";

export default function OptionCategory({ ...props }: OptionCategoryProps) {
  return (
    <div
      className={`bg-[#212121] cursor-pointer text-white active:bg-[#FFB74D] flex items-center justify-center rounded-4xl h-fit w-fit p-3`}
    >
      <p className="font-medium text-[16px]">{props.label}</p>
    </div>
  );
}
