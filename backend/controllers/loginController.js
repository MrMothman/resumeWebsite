// Import any necessary dependencies or models
import { Login } from '../models/login.js';
import bcrypt from 'bcrypt';



const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username in the database
    const user = await Login.findOne({ username });

    if (!user) {
      // User not found
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Password incorrect
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Authentication successful, you can generate a JWT token here if needed
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    // Handle errors
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const register = async (req, res) => {

  const { username, password } = req.body;

  try {
    // Check if the username already exists in the database
    const existingUser = await Login.findOne({ username });

    if (existingUser) {
      // Username already exists
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new Login({ username, password: hashedPassword });
    await newUser.save();

    // Registration successful
    return res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    // Handle errors
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const logout = async (req, res) => {
  // Your logout logic here
};


// Export the controller functions
export { login, register, logout };