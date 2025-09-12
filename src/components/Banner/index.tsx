import { Star } from "lucide-react";
import type { BannerProps } from "../../interfaces/components/Banner";

export default function Banner({
  feedback,
  author,
  backgroundImage,
}: BannerProps) {
  console.log(backgroundImage);
  return (
    <section
      className="flex pt-16 h-full w-full justify-end items-end rounded-[64px]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.90)_5%,black_100%)] flex flex-col px-6 pb-16 items-start gap-8 w-full">
        <div className="flex items-center gap-0.5">
          <Star size={24} fill="#FDD835" color="#FDD835" />
          <Star size={24} fill="#FDD835" color="#FDD835" />
          <Star size={24} fill="#FDD835" color="#FDD835" />
          <Star size={24} fill="#FDD835" color="#FDD835" />
          <Star size={24} fill="#FDD835" color="#FDD835" />
        </div>
        <p className="text-2xl font-semibold text-left text-white">
          {feedback}
        </p>
        <p className="text-2xl font-medium italic text-left text-white">
          {author}
        </p>
      </div>
    </section>
  );
}
