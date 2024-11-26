import Anuncio from "@/components/Anuncio";
import { useEffect, useState } from "react";

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    cost: number;
    status: number;
  }

export default function updateProduct(){
    const [products, setProducts] = useState<Products[]>([]);
    const [error, setError] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [cost, setCost] = useState<number>(0);
    

    useEffect(() => {
        // Remover o scroll horizontal
        document.body.style.overflowX = "hidden";
    
        // Buscar Produtos no BD
        fetchProducts();
      }, []);
    
      // Função de Busca que obtem o retorno da API
      const fetchProducts = async () => {
        try {
          const response = await fetch("/api/products");
    
          if (!response.ok) throw new Error("Failed to fetch: look at index.tsx");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
   
    return(
        <div>
            {products.map((product) => (
          <li key={product.id}>
            <Anuncio
              title={product.title}
              description={product.description}
              price={product.price}
              image="/imagens/vaso.png"
            >
              {" "}
            </Anuncio>
          </li>
        ))}
            <input type="text" placeholder={title} />
        </div>
    )
}

