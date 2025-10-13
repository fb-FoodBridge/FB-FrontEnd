import { Login } from "./Login";

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
   fields?: { [key: string]: string };
   error?:unknown
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
     const fieldErrors = response.fields || {};
      return { success: false, fields: fieldErrors }
    }
    return {
      success: true,
      message: "Login realizado com sucesso.",
      data: response.data
    };

  } catch (error) {
    return {
      success: false, error
    };
  }
}
