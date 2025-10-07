import { useState, type FormEvent } from "react";
import { authSchema } from "../../lib/zod/useAuth";
import type { AuthType} from "../../lib/zod/useAuth";
export const useAuth = () => {
    const [auth,setAuth] = useState<AuthType>({
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