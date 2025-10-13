import { Login } from "./Login";

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
   fields?: { [key: string]: string };
   error?:unknown | string;
  data?: T;
}

export async function handleCallApi(auth: {
  email: string;
  password: string;
}): Promise<ApiResponse> {
  try {
    const response = await Login(auth);

    if (!response) {
      return { success: false, message: "Sem resposta do servidor." };
    }

    if (!response.success) {
     return response;
    }
    return response;

  } catch (error) {
    return {
      success: false, error
    };
  }
}
