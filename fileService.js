// fileService.js
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

const extractAudio = (videoPath, audioPath, callback) => {
  ffmpeg(videoPath)
    .output(audioPath)
    .on("end", () => {
      console.log("Audio extraction complete. File saved at", audioPath);
      callback();
    })
    .on("error", (err) => {
      console.error("Error occurred:", err.message);
    })
    .run();
};

const fileExists = (filePath) => {
  return fs.existsSync(filePath);
};

module.exports = {
  extractAudio,
  fileExists
};

/* .on("start", (commandLine) => {
  console.log("FFmpeg process started:", commandLine);
})
.on("progress", (progress) => {
  console.log("Processing:", progress.percent + "% done");
}) */