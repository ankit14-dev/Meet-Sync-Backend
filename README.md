# MeetSync - Video Transcription & Summarization

A web application that transcribes video files and generates summaries using AI. Built with Node.js, Express, and Google's Gemini AI.

## Features

- Video to audio conversion using FFmpeg
- Audio transcription using AssemblyAI
- Text summarization using Google's Gemini AI
- Real-time file processing status
- Clean file management (automatic cleanup after processing)
- Cross-platform compatibility
- RESTful API architecture

## Tech Stack

### Backend
- **Runtime**: Node.js (v14 or higher)
- **Framework**: Express.js
- **File Processing**: FFmpeg
- **File Upload**: Multer
- **API Integration**: 
  - AssemblyAI SDK
  - Google Generative AI SDK
- **Development Tools**: Nodemon

### Frontend
- **Framework**: React
- **HTTP Client**: Axios
- **State Management**: React Hooks

### APIs
- AssemblyAI for transcription
- Google Gemini AI for summarization

### Tools
- FFmpeg for media processing
- Git for version control
- VS Code (recommended editor)

## Prerequisites

1. **Node.js Installation**
```bash
# Check if installed
node --version  # Should be v14 or higher
npm --version
```
2. **FFmpeg Installation**
```bash
# Windows (using Chocolatey)
choco install ffmpeg

# Windows (manual)
# Download from https://ffmpeg.org/download.html
# Add to PATH environment variable

# Verify installation
ffmpeg -version
```
3. **API Keys**
- AssemblyAI API key from https://www.assemblyai.com/
- Google Gemini API key from https://makersuite.google.com/app/apikey

# **Installation**

1. **Clone Repository**
```bash
git clone 
cd meetsync
```
2. **Server Setup**
```bash
cd server
npm install

# Create necessary directories
mkdir -p public/files public/audio

# Create and configure .env
copy .env.example .env
# Edit .env with your API keys
```
3. **Client Setup**
```bash
cd ../client
npm install
```

# Project Structure
```
meetsync/
├── server/
│   ├── public/
│   │   ├── files/     # Temporary video storage
│   │   └── audio/     # Temporary audio storage
│   ├── app.js         # Main server file
│   ├── fileService.js # FFmpeg operations
│   ├── openaiService.js # Gemini AI integration
│   └── transcriptionService.js # AssemblyAI integration
├── client/
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   └── public/
└── README.md
```