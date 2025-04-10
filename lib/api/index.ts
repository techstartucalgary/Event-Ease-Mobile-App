// specify general routing path (main route and sub route)

import axios from "axios";

const API_BASE_URL = "https://eventeaseca.vercel.app/api";

export async function getRequest<T>(endpoint: string, params = {}): Promise<T> {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
}

export async function postRequest({}) {}
