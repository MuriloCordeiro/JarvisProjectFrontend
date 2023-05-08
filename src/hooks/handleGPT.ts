import { api } from "../services/api";
import { useState } from "react";

export async function HandleGPT(prompt: any, apiKey: any) {
  try {
    const response = await api.post("askGPT", {
      prompt: prompt,
      apiKey: apiKey,
    });

    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
