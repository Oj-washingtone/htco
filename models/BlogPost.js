import mongoose from "mongoose";

// blog has only post which carries an object
const BlogPostSchema = new mongoose.Schema(
  {
    post: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);
// Create the model
const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);

export default BlogPost;
