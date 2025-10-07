import { useState } from "react";
import type { authInfo } from "../../types/hooks/useAuth";

export const useAuth = () => {
    const [auth,setAuth] = useState<authInfo>({
        email: "",
        password: ""
    });


}