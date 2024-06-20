import { prisma } from "./prisma/prismaclient"

const seedDatabase = async () => {
    const users = await prisma.user.createMany({
        data: [
            {
                id: 1,
                name: "Ya boi",
            },
            {
                id: 2,
                name: 'Bob'
            }

        ]

    })


    const movies = await prisma.movie.createMany({
        data: [
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
    })

    const addFavorite = await prisma.moviesOnUsers.create({
        data: {
            userId: 1,
            movieId: 1
        }

    })

}

export default seedDatabase;