import { prisma } from "./prisma/prismaclient";
import { beforeEach, describe, expect, it } from 'vitest'
import seedDatabase from "./seed";
import { MovieService } from "./MovieService";

beforeEach(async () => {
    await seedDatabase();
})

describe('database tests', () => {
    it('should create a user', async () => {
        const user = await prisma.user.create({
            data: {
                id: 42,
                name: "Man"
            }
        })
        console.log("user is: " + user)
        expect(user).toEqual({ id: 42, name: "Man" })
    })

    it('should get a user', async () => {
        const user = await prisma.user.findFirst({
            where: { id: 1 },
            include: { movies: true }

        })
        expect(user).toEqual({ id: 1, name: "Ya boi", movies: [{ userId: 1, movieId: 1 }] })
    })

    it('should get all users', async () => {
        const allMovies = await prisma.movie.findMany()

        expect(allMovies).toEqual(
            [
                {
                    id: 1,
                    title: "Bee Movie",
                    releaseYear: 2009,
                    summary: "Bee fucks woman, or tries to"

                },
                {
                    id: 2,
                    title: "The Matrix",
                    releaseYear: 1999,
                    summary: "Woah. Neo. Sunglasses. Keanu REEVES."
                }

            ]
        )
    })

    it('should get a movie', async () => {
        const movie = await MovieService().getMovie(1)
        expect(movie).toEqual({
            "id": 1,
            "releaseYear": 2009,
            "summary": "Bee fucks woman, or tries to",
            "title": "Bee Movie",
        })

    })





})