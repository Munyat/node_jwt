const jwt = require('jsonwebtoken');
const CustomAPIError = require("../errors/custom-error");

const Login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide username and password', 400);
  }

  // Normally you'd verify user + password against DB here

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({
    msg: 'Login successful',
    token,
  });
};



const Dashboard = async (req, res) => {
  res.status(200).json({ title: 'Dashboard Page',secret: Math.floor(Math.random()*100) });
};

module.exports = {
  Login,
  Dashboard,
};