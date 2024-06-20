import { Movie } from '@prisma/client'
import { User } from '@prisma/client'
import { prisma } from './prisma/prismaclient'



await prisma.user.create({
    data: {
        name: 'jonny',

    }

})

const movieObject: Movie = {
    id: 1,
    title: 'Apocalypse Now',
    releaseYear: 1955,
    summary: 'People in the jungle',

}
await prisma.movie.create({
    data: movieObject

})


console.log('users:', await prisma.user.findMany())
console.log('movies: ', await prisma.movie.findMany())