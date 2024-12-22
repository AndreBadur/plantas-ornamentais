import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Products(req, res) {
    if (req.method === 'GET') {
        if (req.query.id) {
            const id = req.query.id
            try {
                console.log('ID no product JS try: ' + Number(id))
                const findUniqueProduct = await prisma.product.findUnique({
                    where: {
                        id: Number(id),
                    },
                })
                res.status(200).json(findUniqueProduct)
            } catch (error) {
                return res
                    .status(500)
                    .json(id)
                    .json({
                        message:
                            'Failed to findUnique Product: look api/product.js',
                    })
            }
        } else {
            try {
                const products = await prisma.product.findMany()
                res.status(200).json(products)
            } catch (error) {
                res.status(500).json({
                    message: 'Failed to fetch Products: look api/product.js',
                })
            }
        }
    } else if (req.method === 'POST') {
        const {
            title,
            description,
            price,
            cost,
            mean_rating,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
        } = req.body

        if (!title || !price) {
            return res
                .status(400)
                .json({
                    message: 'Invalid Data: You need to put title and body',
                })
        }

        try {
            const newProduct = await prisma.product.create({
                data: {
                    title,
                    description,
                    price,
                    cost,
                    mean_rating,
                    image_1,
                    image_2,
                    image_3,
                    image_4,
                    image_5,
                },
            })
            res.status(201).json(newProduct)
        } catch (error) {
            res.status(500).json({
                message: 'Failed to create Product: look api/product.js',
            })
        }
    } else if (req.method === 'DELETE') {
        const id = req.query.receivedId

        if (!id) {
            return res
                .status(400)
                .json({ message: 'Invalid Data: Product ID is missing' })
        }
        try {
            const deleteProduct = await prisma.product.delete({
                where: {
                    id: Number(id),
                },
            })
            res.status(201).json(deleteProduct)
        } catch (error) {
            res.status(500)
                .json(id)
                .json({
                    message: 'Failed to delete Product: look api/product.js',
                })
        }
    } else if (req.method === 'PUT') {
        const id = req.query.id
        const {
            title,
            description,
            price,
            cost,
            mean_rating,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
            inactive,
        } = req.body

        if (!title || !price) {
            return res
                .status(400)
                .json({ message: 'Invalid Data: Product ID is missing' })
        }
        try {
            const updateProduct = await prisma.product.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title,
                    description,
                    price,
                    cost,
                    mean_rating,
                    image_1,
                    image_2,
                    image_3,
                    image_4,
                    image_5,
                    inactive,
                },
            })
            res.status(201).json(updateProduct)
        } catch (error) {
            res.status(500)
                .json(id)
                .json({
                    message: 'Failed to update Product: look api/product.js',
                })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
