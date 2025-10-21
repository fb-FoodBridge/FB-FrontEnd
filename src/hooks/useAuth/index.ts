import { useState } from "react";
import type { AuthType, RegisterType } from "../../lib/zod/useAuth";
export const useAuth = () => {

const [registerAuth, setRegisterAuth] = useState<RegisterType>({
  email: "",
  password: "",
  username: "",
  cnpj: "",
});

    const [loading, setLoading] = useState(false);


  function handleRegisterChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
     setRegisterAuth((prev) => ({ ...prev, [name]: value }))
  }


  return {

    registerAuth,

    handleRegisterChange,
    loading,
    setLoading,
  };

};
