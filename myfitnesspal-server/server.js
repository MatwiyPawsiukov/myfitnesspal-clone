const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); 

mongoose.connect('mongodb+srv://myfitnesspal:myfitnesspal@myfitnesspal.vddf0.mongodb.net/?retryWrites=true&w=majority&appName=myfitnesspal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error: error.message }); // Include error message
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});