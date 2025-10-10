import { Login } from "./Login";

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
   fields?: { [key: string]: string };
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
      data: response,
    };

  } catch (error) {
    console.error("Erro ao chamar API:", error);
    return {
      success: false,
      message: "Erro de conexão com o servidor.",
    };
  }
}
