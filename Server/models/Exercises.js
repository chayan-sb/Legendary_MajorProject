import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  steps: Array,
  dos: Array,
  donts: Array,
  image_link: String,
  video_link: String,
  benefits: Array,
  others: Object
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
