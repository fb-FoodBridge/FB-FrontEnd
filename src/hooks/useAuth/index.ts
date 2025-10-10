import { useState } from "react";
import type { AuthType } from "../../lib/zod/useAuth";
export const useAuth = () => {
  
  const [auth, setAuth] = useState<AuthType>({ email: "", password: "" });
 
    const [loading, setLoading] = useState(false);

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setAuth((prev) => ({ ...prev, [name]: value }));
  }

  return {
    auth,
    setAuth,
    handleChange,
    loading,
    setLoading,
  };

};
