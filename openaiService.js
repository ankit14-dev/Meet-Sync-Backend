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
    const prompt = `Please provide a concise summary of the following text:\n\n${text}`;
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