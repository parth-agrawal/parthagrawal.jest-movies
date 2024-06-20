import { Movie } from "@prisma/client"
import { prisma } from "./prisma/prismaclient"



export const MovieService = () => {
    return {
        getUser: async (userId: number) => {
            const user = await prisma.user.findFirst({
                where: { id: userId },
                include: { movies: true }
            })
            return user


        },

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

        },
        favoriteMovie: async (movieId: number, userId: number) => {
            // const user = await prisma.movie.findFirst({ where: { id: userId } })
            const newFavoriteMovie = await prisma.moviesOnUsers.create({
                data: {
                    userId: userId,
                    movieId: movieId
                }
            })
        },
        getFavorites: async (userId) => {
            const user = await prisma.user.findFirst({
                where: {
                    id: userId
                }
            })

            return

        }


    }
}