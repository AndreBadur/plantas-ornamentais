import prisma from '@/lib/db'
import { hash, compare } from 'bcrypt'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        //criacao de usuario
        const { email, password } = req.body

        if (!password || !email) {
            res.status(400).json({ message: 'email e senha são obrigatorios' })
        }

        try {
            await checkUser(email, password)
        } catch (error) {
            res.status(500).json({ message: 'Failed to login' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}

async function checkUser(email, password) {
    const user = await prisma.client.findUnique({
        where: {
            email,
        },
    })

    const match = await bcrypt.compare(password, user.password)

    if (match) {
        res.status(200).json({ message: 'Logado com sucesso!' })
    } else {
        res.status(400).json({ message: 'Usuário incorreto!' })
    }

    //...
}
