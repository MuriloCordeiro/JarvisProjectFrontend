import { api } from "../services/api";
import { useState } from "react";

export async function example(teste: any) {
  try {
    const response = await api.post("test/EndPoint", {
      params: {
        test: teste,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
