import { prisma } from "./prisma/prismaclient";
import { describe, it } from 'vitest'

describe('database tests', () => {
    it('should create a user', async () => {
        const user = await prisma.user.create({
            data: {
                id: 42,
                name: "Man"
            }
        })
    })
})