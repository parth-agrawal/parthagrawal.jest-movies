import express from 'express';
import { MovieService } from './MovieService';
import cors from 'cors';
import bodyParser from 'body-parser';




const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



app.get('/', (req, res) => {
    res.send('hello world')
})

// is this correct?
app.get('/movies/all', async (req, res) => {

    res.send(await MovieService().getAllMovies())
})

app.get('/movies/:id', async (req, res) => {
    const id = req.params.id
    res.send(await MovieService().getMovie(parseInt(id)))
})

app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const user = await MovieService().getUser(id)
    if (user) {
        res.send("User: " + JSON.stringify(user))
    }
    else {
        res.send("Error: User not found")
    }

})

// app.get('/users/:id/favorites', async (req, res) => {
//     const id = parseInt(req.params.id)

//     const user = await MovieService().getUser(id)
//     if (user) {
//         res.send("User: " + JSON.stringify(user))
//     }
//     else {
//         res.send("Error: User not found")
//     }

// })



app.post('/users/:id/add'), async (req, res) => {
    const userId = req.params.id
    const movieId = req.body.movieId

    console.log(console.error())
    console.log(req)


    await MovieService().favoriteMovie(userId, movieId)


}








const PORT = 3500;
app.listen(PORT, () => {
    console.log('server is listening at http://localhost:' + PORT);
})