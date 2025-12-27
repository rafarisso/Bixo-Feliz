
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string) => {
  const API_KEY = process.env.API_KEY || "";
  
  if (!API_KEY) {
    return "O assistente está descansando agora. Por favor, tente novamente mais tarde!";
  }

  // Create instance right before call for maximum reliability
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Você é o "Bixinho", o assistente virtual do Petshop Bixo Feliz. 
        O Petshop Bixo Feliz oferece banho e tosa, venda de rações de alta qualidade e animais de estimação.
        Horário de funcionamento: 
        - Segunda a Sábado: 08:00 às 19:00.
        - Domingos: 09:00 às 14:00.
        Seu tom deve ser amigável, prestativo e amar animais. 
        Dê dicas de cuidados com pets e ajude os clientes a entenderem qual serviço ou ração é melhor.
        Responda sempre em Português do Brasil.`,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Gemini Error:", error);
    // If it's a connection or auth error, give a helpful message
    return "Tive um probleminha de conexão com meu cérebro eletrônico. Pode tentar perguntar novamente em instantes?";
  }
};
