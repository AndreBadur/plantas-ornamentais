import Anuncio from "@/components/Anuncio";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { resolve } from "path";
import { FormEvent, useEffect, useState } from "react";


interface findUniqueProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  cost: number;
  mean_rating: number;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  inactive: number;
}


export default function updateProduct() {
    const router = useRouter();
    let selectedId: string
    const [product,setProduct] = useState<findUniqueProduct>();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [error, setError] = useState<string>("");
    const [cost, setCost] = useState<number>(0)
    const [mean_rating, setMean_rating] = useState<number>(0);
    const [inactive,setInactive] = useState<number>(0);
    const [image_1, setImage_1] = useState<any>(null);  
    const [image_2, setImage_2] = useState<any>(null);   
    const [image_3, setImage_3] = useState<any>(null);   
    const [image_4, setImage_4] = useState<any>(null);   
    const [image_5, setImage_5] = useState<any>(null);  
    
    const [reqId, setReqId] = useState<any>(undefined)
    const formEvent = async (e: FormEvent) => {
      e.preventDefault;
    };

    
      useEffect(()=>{
        selectedId = String(router.query.id)
        if(selectedId != "undefined"){
         fetchProducts(selectedId)
         setReqId(selectedId);
        }
      },[router.query.id])

      const fetchProducts = async (id:string) => {
        try {
          const response = await fetch("/api/products?id="+id);
          if (!response.ok) throw new Error("Failed to fetch: look at index.tsx");
          const data = await response.json();
          setProduct(data);
          setTitle(data.title);
          setDescription(data.description);
          setPrice(data.price);
          setCost(data.cost);
          setMean_rating(data.mean_rating);
          setInactive(data.inactive)
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      const handleSubmit = async () => {
        formEvent;
        
        console.log("no btn")
        if (!title || !price) {
          console.log("Erro de entrada no formulário");
          return;
        }
        try {
          console.log("/api/products?id="+reqId)
          const response = await fetch("/api/products?id="+reqId, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, price, cost, mean_rating, image_1, image_2, image_3, image_4, image_5, inactive}),
          });
          if (response.ok) {
            console.log("response")
            const newProduct = await response.json();
            console.log(newProduct)
            alert("produto atualizado")
            router.push("admin");
          } else {
            throw new Error("Failed to update product");
          }
        } catch (error) {
          console.error("Error updating product - catch:", error);
          setError("failed to update product");
        }
      };

      
      
    return(
      <div>
        <h1 className="font-black text-black m-6 border-b border-gray-300">Edição do produto: {product?.id}</h1>
        <div className="flex flex-col items-center">          
          <label className="mt-4">Title</label>
          <input className="border border-gray-300 rounded-md p-5 w-[15%] h-10" type="text" defaultValue={product?.title} onChange={(e) => setTitle(e.target.value)}/>
          <label className="mt-4">Description</label>
          <input className="border border-gray-300 rounded-md p-5 w-[15%] h-10" type="text" defaultValue={product?.description} onChange={(e) => setDescription(e.target.value)}/>
          <label className="mt-4">Price</label>
          <input className="border border-gray-300 rounded-md p-5 w-[15%] h-10" type="text" defaultValue={product?.price} onChange={(e) => setPrice(Number(e.target.value))}/>
          <label className="mt-4">Cost</label>
          <input className="border border-gray-300 rounded-md p-5 w-[15%] h-10" type="text" defaultValue={product?.cost} onChange={(e) => setCost(Number(e.target.value))}/>
          <label className="mt-4">Mean Rating</label>
          <input className="border border-gray-300 rounded-md p-5 w-[15%] h-10" type="text" defaultValue={product?.mean_rating} onChange={(e) => setMean_rating(Number(e.target.value))}/>
          <label className="mt-4">Status (active = 0 | inactive = 1)</label>
          <input className="border border-gray-300 rounded-md p-5 w-[15%] h-10" type="text" defaultValue={product?.inactive} onChange={(e) => setInactive(Number(e.target.value))}/>
          <div className="mt-10 w-full flex justify-center">
            <input className="border border-gray-300 rounded-md p-5 w-[15%] h-fit" type="file" defaultValue={product?.image_1} onChange={(e) => setImage_1(e.target.value)}/>
            <input className="border border-gray-300 rounded-md p-5 w-[15%] h-fit" type="file" defaultValue={product?.image_2} onChange={(e) => setImage_2(e.target.value)}/>
            <input className="border border-gray-300 rounded-md p-5 w-[15%] h-fit" type="file" defaultValue={product?.image_3} onChange={(e) => setImage_3(e.target.value)}/>
            <input className="border border-gray-300 rounded-md p-5 w-[15%] h-fit" type="file" defaultValue={product?.image_4} onChange={(e) => setImage_4(e.target.value)}/>
            <input className="border border-gray-300 rounded-md p-5 w-[15%] h-fit" type="file" defaultValue={product?.image_5} onChange={(e) => setImage_5(e.target.value)}/>            
          </div>
          
          <div className="mt-10 w-full flex justify-end">
              <Link href="admin">
              <button className="mr-5 w-40 h-11 rounded-md text-white font-black bg-red-600 hover:bg-red-700">
                Cancelar
               </button>
              </Link>
               <button className="mr-20 w-72 h-11 rounded-md text-white font-black bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
                Atualizar Produto
               </button>
            </div>
        </div>
        
        
      </div>
    )
}

