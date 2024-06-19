import { Movie } from "@prisma/client"
import { prisma } from "./prisma/prismaclient"



export const MovieService = () => {
    return {
        getAllMovies: async () => {
            const allMovies = await prisma.movie.findMany()
            console.log(allMovies)
            return allMovies

        },
        // getMovie: (movieId: number) => {

        // }

    }
}