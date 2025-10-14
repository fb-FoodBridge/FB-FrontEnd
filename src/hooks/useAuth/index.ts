import { useState, type FormEvent } from "react";
import { authSchema } from "../../lib/zod/useAuth";
import type { AuthType } from "../../lib/zod/useAuth";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthType>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = authSchema.safeParse(auth);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};

      result.error.issues.forEach((issue) => {
        if (typeof issue.path[0] === "string")
          fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);

      return;
    } else {
      setErrors({});
    }

    if (!auth.email || !auth.password) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
  }

  return {
    auth,
    handleChange,
    errors,
    handleSubmit,
  };
};
