// transcriptionService.js
const assemblyai = require("assemblyai"); // Adjust the import based on your setup

const client = new assemblyai.AssemblyAI({
  apiKey: "9417a6234eb342e786c78020dffd6659",
});

const transcribeAudio = async (filePath) => {
  const data = { audio: "https://assembly.ai/sports_injuries.mp3" };
  try {
    const transcript = await client.transcripts.transcribe(data);
    console.log(transcript.text);
    console.log("Transcription complete");
  } catch (err) {
    console.error("Transcription error:", err);
  }
};

module.exports = {
  transcribeAudio,
};
