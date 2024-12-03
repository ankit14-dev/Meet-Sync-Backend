const express = require("express");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const {extractAudio,fileExists} = require('./fileService')
const fs = require('fs').promises;
// const {transcribeAudio} =require('./transcriptionService')

const {generateSummary} = require('./openaiService')
const assemblyai = require("assemblyai"); 
const { log } = require("console");

const client = new assemblyai.AssemblyAI({
  apiKey: '9417a6234eb342e786c78020dffd6659',
});



const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/files");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");
  console.log(req.file);
  console.log(req.body);

  res.json({ message: "File uploaded successfully" });
  const filename = path.parse(req.file.filename).name;
  const audioPath = `./public/audio/${filename}.mp3`;
  const videoPath = `./public/files/${req.file.filename}`;
  const data = { audio: audioPath };

  extractAudio(videoPath,audioPath,async()=>{
    if (!fileExists(audioPath)) {
      console.error("File does not exist:", audioPath);
      return;
    }
    
    // Delete the original video file
    await fs.unlink(videoPath);
    console.log(`Deleted original video file: ${videoPath}`);

    const transcribe=await transcribeAudio(audioPath);
    // Delete the original video file
    await fs.unlink(audioPath);
    console.log(`Deleted original audio file: ${audioPath}`);
    console.log(transcribe);

    const summary=await generateSummary(transcribe);
    console.log(summary);
  }) 
  const transcribeAudio = async () => {
    
    try {
      console.log(audioPath);
      
      console.log("Transcription started");
      const transcript = await client.transcripts.transcribe(data);
      console.log(transcript);
      console.log("Transcription complete");
      return transcript.text;
    } catch (err) {
      console.error("Transcription error:", err);
    }
  }; 
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
