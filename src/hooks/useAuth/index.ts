import { useState, type FormEvent } from "react";
import type { authInfo } from "../../types/hooks/useAuth";
import { authSchema } from "../../lib/zod/contactForm";

export const useAuth = () => {
    const [auth,setAuth] = useState<authInfo>({
        email: "",
        password: ""
    });

      const [errors, setErrors] = useState<{[ key: string ]: string}>({});

     function handleChange(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const result = authSchema.safeParse(auth)
        if(!result.success){
            
        }
     }

}