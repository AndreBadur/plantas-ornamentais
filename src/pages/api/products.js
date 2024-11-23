import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Products(req, res){
    if(req.method === 'GET'){
        try {
            const products = await prisma.product.findMany();
            res.status(200).json(products);        
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch Products: look api/product.js'});
        }
    } else if(req.method === 'POST'){
        const {title, description, price, cost} = req.body;

        if(!title || !price){
           return res.status(400).json({ message:'Invalid Data: You need to put title and body' });
        }

        try {
            console.log(title,description,price);
            const newProduct = await prisma.product.create({
                data: { title, description, price, cost },
            });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create Product: look api/product.js'});
        }
    } else{
        res.status(405).json({ message: 'Method not allowed'});
    }
    //, cost, mean_rating, image1, image2,image3,image4,image5
    
}