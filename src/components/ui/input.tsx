import * as React from "react";
import { cn } from "../../lib/utils";

type BaseProps = {
  className?: string;
};

type InputFieldProps = BaseProps & React.ComponentProps<"input"> & {
  isMessageField?: false;
};

type TextareaFieldProps = BaseProps & React.ComponentProps<"textarea"> & {
  isMessageField: true;
};

export type InputProps = InputFieldProps | TextareaFieldProps ;

function Input(props: InputProps) {
  const { className } = props;
  if (props.isMessageField) {

    const { isMessageField, ...textareaProps } = props;
    return (
      <textarea
        data-slot="input"
        className={cn(
          "placeholder:text-[#A1A1AA] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#3D3D3D] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        rows={6}
        {...textareaProps}
      />
    );
  }
  // Only input props here
  const { isMessageField, ...inputProps } = props;
  return (
    <input
      data-slot="input"
      onChange={props.onChange}
      className={cn(
        "file:text-foreground placeholder:text-[#A1A1AA] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#3D3D3D] flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...inputProps}
    />
  );
}

export { Input };