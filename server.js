const loaders = require('./src/loaders');

const starter = async () => {
  // intialize the project
  const server = await loaders();
  const { PORT = 5000 } = process.env;
  // Server listens on http://localhost:5000
  server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

starter();
