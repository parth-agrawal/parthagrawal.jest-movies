import { prisma } from "./prisma/prismaclient";
import { describe, expect, it } from 'vitest'



describe('database tests', () => {
    it('should create a user', async () => {
        const user = await prisma.user.create({
            data: {
                id: 42,
                name: "Man"
            }
        })
        console.log("user is: " + user)
        expect(user).toStrictEqual({ id: 42, name: "Man" })
    })

    it('should get a user', async (userId: number) => {
        const user = await prisma.user.findFirst({
            where: { id: userId },
            include: { movies: true }

        })
    })



})