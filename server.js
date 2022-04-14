const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 8000;

// Start Server
app.listen(port, () => {
  console.log(`Natours app is running on port ${port}`);
});
