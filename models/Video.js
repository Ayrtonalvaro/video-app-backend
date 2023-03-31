import mongoose from 'mongoose'

let Video

try {
  Video = mongoose.model("Video")
} catch (error) {
  Video = mongoose.model("Video", new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
},{timestamps: true}))
}

export default Video