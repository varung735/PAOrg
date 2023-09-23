const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    console.log(`http://localhost:${port}`);
});