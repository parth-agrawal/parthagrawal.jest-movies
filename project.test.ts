import { prisma } from "./prisma/prismaclient";
import { beforeEach, describe, expect, it } from 'vitest'
import seedDatabase from "./seed";

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



})