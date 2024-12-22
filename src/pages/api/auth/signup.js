import prisma from '@/lib/db'
import { hash } from 'bcrypt'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        //criacao de usuario
        const { email, password, name, confirm_password } = req.body

        if (!password || !email || !name || !confirm_password) {
            res.status(400).json({ message: 'preencha todos os campos!' })
        } else if (password != confirm_password) {
            res.status(400).json({ message: 'As senhas não são iguais!' })
        }

        try {
            // Create a new user
            const password_encrypted = await hash(password, 12)
            const newUser = await prisma.client.create({
                data: {
                    email,
                    password_encrypted,
                    name,
                    surname: '',
                    iv: '',
                    token: '',
                },
            })
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
