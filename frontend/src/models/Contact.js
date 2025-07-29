import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  type: String,
}, { timestamps: true })

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
