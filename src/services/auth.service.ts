import { makeRequest } from "./request.service";

async function login(userData: { username: string; password: string }) {
  try {
    const response = await makeRequest.post("/users/auth/login", {
      username: userData.username,
      password: userData.password,
    });

    return response.data;
  } catch (error) {
    return error;
  }
}

export default { login };
