const config = require('./src/config/config');

const starter = async () => {
  // intialize the project
  const server = await config();
  const { PORT = 5000 } = process.env;
  // Server listens on http://localhost:5000
  server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

starter();
