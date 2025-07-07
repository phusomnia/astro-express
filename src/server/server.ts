import express from 'express';
// import { handler as astroHandler } from ""

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`🚀 http://localhost:${port}`);
});