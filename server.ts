import express from 'express';
import { MovieService } from './MovieService';



const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/allmovies', async (req, res) => {

    res.send(await MovieService().getAllMovies())
})








const PORT = 3500;
app.listen(PORT, () => {
    console.log('server is listening at http://localhost:' + PORT);
})