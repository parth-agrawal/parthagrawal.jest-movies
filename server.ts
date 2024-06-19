import express from 'express';



const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/allmovies', (req, res) => {

})








const PORT = 3500;
app.listen(PORT, () => {
    console.log('server is listening at http://localhost:' + PORT);
})