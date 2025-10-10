import { Login } from "./Login";

export async function handleCallApi(auth: { email: string; password: string }) {
  try {
    const response = await Login(auth);

    if (!response) {
      return { success: false, response: "" };
    }

    if (!response.success) {
      const firstError = Object.values(response.fields || {})[0];
      return { success: false, response: firstError };
    }
    const res = response;
    console.log("Login: ", res);
    return { success: true, response: res };
  } catch (error) {
    console.error(error);
  }
}
