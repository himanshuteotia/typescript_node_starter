import express from 'express';
function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = express();
app.use(loggerMiddleware);

const port = 3000;
app.get('/', (req, res) => {
  res.send('Ts server is running fine ...');
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
