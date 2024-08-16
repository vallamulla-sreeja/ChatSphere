import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.EXPO_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function groqResponse(content) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      model: "mixtral-8x7b-32768",
    });
    return chatCompletion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error in groqResponse:", error);
    return "An error occurred";
  }
}

export default groqResponse;
