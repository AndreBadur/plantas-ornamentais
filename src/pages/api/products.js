import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Products(req, res) {
  if (req.method === "GET") {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch Products: look api/product.js" });
    }
  } else if (req.method === "POST") {
    const { title, description, price, cost } = req.body;

    if (!title || !price) {
      return res
        .status(400)
        .json({ message: "Invalid Data: You need to put title and body" });
    }

    try {
      const newProduct = await prisma.product.create({
        data: { title, description, price, cost },
      });
      res.status(201).json(newProduct);
      } 
      catch (error) {
      res
        .status(500)
        .json({ message: "Failed to create Product: look api/product.js" });
    }
  } else if (req.method === "DELETE") {
    const id  = req.query.receivedId;

    if (!id) {
      return res
        .status(400)
        .json({ message: "Invalid Data: Product ID is missing" });
    }
    try {
      const deleteProduct = await prisma.product.delete({
        where: {
          id:Number(id), 
        },
      });
      res.status(201).json(deleteProduct);
      res.status(201).json(id);
    } catch (error) {
      res
        .status(500).json(id)
        .json({ message: "Failed to delete Product: look api/product.js" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
  //, cost, mean_rating, image1, image2,image3,image4,image5
}
