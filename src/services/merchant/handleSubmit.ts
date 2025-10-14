import { useAuth } from "../../hooks/useAuth";
import { Login } from "./Login";


export async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { auth } = useAuth();
    try {
        const response = await Login(auth);

        if (!response.success) {
            const firstError = Object.values(response.fields || {})[0];
            return console.error(firstError)
        }
        const res = response.response;
        console.log("Login: ", res);
    } catch (error) {
        console.error(error);
    }
};
