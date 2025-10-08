import { useState } from "react";
import type { FormProps } from "../../interfaces/components/Input";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Form({ ...props }: FormProps) {
  const [email,setEmail] = useState("")
  console.log(email)
  return (
    <form onSubmit={props.onSubmit} className="w-full flex flex-col gap-4 h-fit">
      {props.fields.map((field, index) => (
        <div key={index} className="flex flex-col w-full gap-2 items-start">
          <p className="font-medium">{field.label}</p>
          <Input
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            isMessageField={field.isMessageField}
            onChange={field.type === "email"? (text) => setEmail(text) : field.onChange}
          />
          {
            props.errorZod && (
              <p className="text-red-500 text-sm">{props.errorZod[field.name]}</p>
            )
          }
        </div>
      ))}

      <Button className="mt-4 text-[16px]" size={"lg"}  variant={"default"}>
        {props.buttonText}
      </Button>
    </form>
  );
}
