import { useState } from "react";
import type { AuthType, RegisterType } from "../../lib/zod/useAuth";
export const useAuth = () => {
  
 const [loginAuth, setLoginAuth] = useState<AuthType>({ email: "", password: "" });

const [registerAuth, setRegisterAuth] = useState<RegisterType>({
  email: "",
  password: "",
  username: "",
  cnpj: "",
});

    const [loading, setLoading] = useState(false);

  function handleLoginChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setLoginAuth((prev) => ({ ...prev, [name]: value })) 
  }

  function handleRegisterChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
     setRegisterAuth((prev) => ({ ...prev, [name]: value }))
  }


  return {
    loginAuth,
    registerAuth,
    handleLoginChange,
    handleRegisterChange,
    loading,
    setLoading,
  };

};
