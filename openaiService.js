// geminiService.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateSummary = async (text) => {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate summary
    const prompt = `You are a professional summarizer. Summarize the following text into a clear and concise paragraph (maximum 200 words) that captures the core message, key insights, and important details. Maintain a neutral tone, and ensure the summary is suitable for a general audience.:\n\n${text}`;
    const result = await model.generateContent(prompt);
    console.log(result)
    const response = result.response;
    
    return response.text();
    
  } catch (error) {
    console.error("Error generating summary with Gemini:", error);
    throw error;
  }
};

module.exports = {
  generateSummary
};
