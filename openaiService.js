// ollamaService.js
const axios = require('axios');

const OLLAMA_ENDPOINT = 'http://localhost:11434/api/generate';

const generateSummary = async (text) => {
  try {
    const response = await axios.post(OLLAMA_ENDPOINT, {
      model: 'llama3.1:8b', // or any other model you have pulled
      prompt: `Please provide a concise summary of the following text:\n\n${text}`,
      stream: false
    });

    // Ollama returns response in response.data.response
    return response.data.response;
    
  } catch (error) {
    console.error("Error generating summary with Ollama:", error);
    throw error;
  }
};

module.exports = {
  generateSummary
};