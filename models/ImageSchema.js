import mongoose from "mongoose";

// image schema
const ImageSchema = new mongoose.Schema({
  image: {
    type: Buffer,
    required: true,
  },
});

// Create the model
const ImageUpload = mongoose.models.Image || mongoose.model("Image", ImageSchema);

export default ImageUpload;
