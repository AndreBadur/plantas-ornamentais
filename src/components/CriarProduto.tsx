import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

import { FormEvent, useState } from "react";
interface Products {
    id: number;
    title: string;
    description: string;
    price: number;
    cost: number;
    mean_rating: number;
    image_1: any;
    image_2: any;
    image_3: any;
    image_4: any;
    image_5: any;
  }
const EditarProduto: React.FC = () => {

  const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        if (!title || !price) {
          setError("Erro de entrada no formulário");
          return;
        }
        try {
          const response = await fetch("/api/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, price, cost, mean_rating, image_1, image_2, image_3, image_4, image_5 }),
          });
          if (response.ok) {
            const newProduct = await response.json();
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            setTitle("");
            setDescription("");
            setPrice(0);
            setCost(0);
            setMean_rating(0);
            setImage_1(null);
            setImage_2(null);
            setImage_3(null);
            setImage_4(null);
            setImage_5(null);
            setError("");
            alert("produto criado")
            router.push("admin");
          } else {
            throw new Error("Failed to add product");
          }
        } catch (error) {
          console.error("Error adding product - catch:", error);
          setError("failed to add product");
        }
      };

    
      const [products, setProducts] = useState<Products[]>([]);
      const [error, setError] = useState<string>("");

      const [title, setTitle] = useState<string>("");
      const [description, setDescription] = useState<string>("");
      const [price, setPrice] = useState<number>(0);
      const [cost, setCost] = useState<number>(0)
      const [mean_rating, setMean_rating] = useState<number>(0);
      const [image_1, setImage_1] = useState<any>(null);  
      const [image_2, setImage_2] = useState<any>(null);   
      const [image_3, setImage_3] = useState<any>(null);   
      const [image_4, setImage_4] = useState<any>(null);   
      const [image_5, setImage_5] = useState<any>(null);   

    return (

        

        <div className="ml-10 mt-14 bg-white flex-col min-h-screen"> {/* items-center justify-center */}
            <div className="flex">
            <h1 className="ml-6 mt-4 text-black font-bold text-3xl">Criar produto</h1>
            </div>

            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="input title here"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="input description here"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="input price here"
                    id="price"
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="input cost here"
                    id="cost"
                    onChange={(e) => setCost(Number(e.target.value))}
                />
                <input 
                    type="text" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-8"
                    placeholder="input mean rating here"
                    id="mean_rating"
                    onChange={(e) => setMean_rating(Number(e.target.value))}
                />
            </div>
            <div className="ml-6 mt-5 mr-6 flex items-center space-x-2">
            <input 
                    type="file" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-12"
                    placeholder="Nível de cuidado" 
                    onChange={(e) => setImage_1(e.target.value)}
            />
            <input 
                    type="file" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-12"
                    placeholder="Nível de cuidado"  
                    onChange={(e) => setImage_2(e.target.value)}
            />
            <input 
                    type="file" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-12"
                    placeholder="Nível de cuidado"  
                    onChange={(e) => setImage_3(e.target.value)}
            />
            <input 
                    type="file" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-12"
                    placeholder="Nível de cuidado"  
                    onChange={(e) => setImage_4(e.target.value)}
            />
            <input 
                    type="file" 
                    className="bg-transparent border border-black text-black 
                    placeholder-gray rounded-md p-2 focus:outline-none w-96 h-12"
                    placeholder="Nível de cuidado"  
                    onChange={(e) => setImage_5(e.target.value)}
            />
            </div>

            <div className="mt-10 w-full flex justify-end">
              <Link href="admin">
              <button className="mr-5 w-40 h-11 rounded-md text-white font-black bg-red-600 hover:bg-red-700">
                Cancelar
               </button>
              </Link>
              
               <button className="mr-20 w-72 h-11 rounded-md text-white font-black bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
                Criar Produto
               </button>
            </div>
        </div>
    );
};

export default EditarProduto;
