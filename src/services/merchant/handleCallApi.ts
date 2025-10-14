import { Login } from "./Login";

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  fields?: { [key: string]: string };
  error?: unknown;
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
      return {
        success: false,
        fields: response.fields || undefined,
        error: response.error,
        message: response.message,
      };
    } else {
      return {
        success: true,
        message: "Login realizado com sucesso.",
        data: response.data,
      };
    }
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
