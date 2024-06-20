import { Movie } from '@prisma/client'
import { User } from '@prisma/client'
import { prisma } from './prisma/prismaclient'



await prisma.user.create({
    data: {
        name: 'jonny',

    }

})

const movieObject: Movie = {
    id: 2,
    title: 'Gooby',
    releaseYear: 2024,
    summary: 'People in the gooby world',

}
await prisma.movie.create({
    data: movieObject

})


console.log('users:', await prisma.user.findMany())
console.log('movies: ', await prisma.movie.findMany())