
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string) => {
  // Obtendo a chave diretamente do ambiente conforme diretrizes
  const API_KEY = process.env.API_KEY || "";
  
  if (!API_KEY) {
    return "No momento meu sistema de IA está offline, mas você pode nos chamar no WhatsApp! 🐾";
  }

  // Instanciando no momento do uso para evitar problemas de sessão/deploy
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Você é o "Bixinho", o assistente virtual do Petshop Bixo Feliz.
        Serviços: Banho e tosa profissional, venda de rações premium, venda de filhotes e animais exóticos.
        
        HORÁRIO DE FUNCIONAMENTO (IMPORTANTE):
        - Segunda a Sábado: 08:00 às 19:00.
        - DOMINGOS: 09:00 às 14:00 (Abertura às 9h, fechamento às 14h).
        
        Diretrizes:
        1. Seja extremamente amigável e use emojis de pets.
        2. Se perguntarem sobre serviços, incentive o agendamento via WhatsApp (31 98765-4321).
        3. Responda sempre em Português do Brasil.
        4. Se não souber algo, peça para o cliente visitar a loja física.`,
        temperature: 0.7,
      },
    });

    return response.text || "Puxa, me distraí com um osso! Pode repetir a pergunta?";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Tive um pequeno problema de conexão. Que tal tentarmos de novo em alguns segundos?";
  }
};
