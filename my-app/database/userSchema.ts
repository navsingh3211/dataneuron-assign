import mongoose from 'mongoose';
const { Schema } = mongoose;

const _schema = new Schema(
  {
    name: {
      type: String,
      index: true,
      required:true
    },
    status: {
      type: Boolean,
      default: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.userData || mongoose.model('userData', _schema);
