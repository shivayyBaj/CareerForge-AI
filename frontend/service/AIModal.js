import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROK_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export const AIChatSession = {
  async sendMessage(prompt) {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    return {
      response: {
        text: () => response.choices[0].message.content,
      },
    };
  },
};