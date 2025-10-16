import type { FormEvent } from "react";

export interface FormProps {
  fields: {
    name: string
    label: string;
    placeholder: string;
    type: string;
    value?: string;
    isMessageField?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }[];
  buttonText: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  errorZod?: {
    [key: string]: string;
  }
  inputSelectedRole: boolean
}