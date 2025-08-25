export interface FormProps {
  fields: {
    label: string;
    placeholder: string;
    type: string;
    value?: string;
    isMessageField?: boolean;
  }[];
  buttonText: string;
  onSubmit?: VoidFunction;
}