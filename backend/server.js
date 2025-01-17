import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/contactDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

// Define Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('contacts', contactSchema);

// API Route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save message', error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
