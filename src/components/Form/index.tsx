
import type { FormProps } from "../../interfaces/components/Input";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Form({ ...props }: FormProps) {
  return (
    <form onSubmit={props.onSubmit} className="w-full flex flex-col gap-4 h-fit">
      {props.fields.map((field, index) => (
        <div key={index} className="flex flex-col w-full gap-2 items-start">
          <p className="font-medium">{field.label}</p>
          <Input
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={field.value}
            isMessageField={field.isMessageField ? true : false}
            onChange={field.onChange}
          />
          {
            props.errorZod && (
              <p className="text-red-500 text-sm">{props.errorZod[field.name]}</p>
            )
          }

          
        </div>
      ))}

      {
            props.selectOptions && (
              <select onChange={props.onchangeSelect} value={props.valueSelect} className="w-[300px] border border-[#3D3D3D] rounded-md p-2 mt-4">
                <option value={''} selected disabled>Selecione uma opção</option>
                <option value={'Instituição'}>Instituição</option>
                <option value={'Comerciante'}>Comerciante</option>
              </select>
            )
          }

      <Button className="mt-4 text-[16px]" size={"lg"} variant={"default"}>
        {props.buttonText}
      </Button>

    </form>
  );
}
