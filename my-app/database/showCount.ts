import mongoose from 'mongoose';
const { Schema } = mongoose;

const _schema = new Schema(
  {
    count: {
      type: Number,
      index: true,
      default:0
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.hitCount || mongoose.model('hitCount', _schema);
