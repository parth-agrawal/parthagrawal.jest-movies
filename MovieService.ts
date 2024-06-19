import { Movie } from "@prisma/client"
import { prisma } from "./prisma/prismaclient"



export const MovieService = () => {
    return {
        getAllMovies: async () => {
            const allMovies = await prisma.movie.findMany()
            console.log(allMovies)
            return allMovies

        },
        getMovie: async (movieId: number) => {
            const movie = await prisma.movie.findFirst({
                where: {
                    id: movieId
                }
            })
            return movie

        }

    }
}