import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Fetch all users
            const users = await prisma.user.findMany()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch users' })
        }
    } else if (req.method === 'POST') {
        const { name, email } = req.body

        if (!name || !email) {
            return res
                .status(400)
                .json({ message: 'Name and email are required' })
        }

        try {
            // Create a new user
            const newUser = await prisma.user.create({
                data: { name, email },
            })
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
