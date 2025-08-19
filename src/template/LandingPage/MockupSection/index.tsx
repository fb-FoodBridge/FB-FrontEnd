import {
  mockupCellPhone,
  mockupPC,
  mockupTablet,
  mockupTV,
} from "../../../assets/images";
import { motion } from "motion/react";

export default function MockupSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-[1440px] w-full flex flex-col gap-6 xl:px-12 xl:py-8 py-16 px-4 md:px-6"
    >
      <div className="w-full flex flex-col xl:flex-row gap-6">
        <img
          src={mockupPC}
          alt="Mockup de computador"
          className="w-full xl:w-[33%] h-[533px] object-cover rounded-[32px] shadow-lg"
        />
        <img
          src={mockupTablet}
          alt="Mockup de tablet"
          className="w-full xl:w-[66%] h-[533px] object-cover rounded-[32px] shadow-lg"
        />
      </div>
      <div className="flex flex-col xl:flex-row w-full gap-6">
        <img
          src={mockupTV}
          alt="Mockup de TV"
          className="w-full xl:w-[66%] h-[533px] object-cover rounded-[32px] shadow-lg"
        />
        <img
          src={mockupCellPhone}
          alt="Mockup de celular"
          className="w-full xl:w-[33%] h-[533px] object-cover rounded-[32px] shadow-lg"
        />
      </div>
    </motion.section>
  );
}
