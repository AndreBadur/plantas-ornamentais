import Anuncio from "@/components/Anuncio";
import SearchBar from "@/components/SearchBar";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { resolve } from "path";
import { useEffect, useState } from "react";


interface findUniqueProduct {
  id: number;
  title: string;
  description: string | null;
  price: number;
  cost: number;
  mean_rating: number | null;
  image_1: string | null;
  image_2: string | null;
  image_3: string | null;
  image_4: string | null;
  image_5: string | null;
  inactive: number;
}


export default function updateProduct() {
    const router = useRouter();
    let selectedId: string
    const [product,setProduct] = useState<findUniqueProduct>();

      useEffect(()=>{
        selectedId = String(router.query.id)
        if(selectedId != "undefined"){
         fetchProducts(selectedId)
        }
      },[router.query.id])

      const fetchProducts = async (id:string) => {
        try {
          const response = await fetch("/api/products?id="+id);
          if (!response.ok) throw new Error("Failed to fetch: look at index.tsx");
          const data = await response.json();
          setProduct(data)
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      
      
    return(
      <div>
        <h1>{product?.title}</h1>
        
      </div>
    )
}

