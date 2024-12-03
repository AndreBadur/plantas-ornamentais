import Anuncio from "@/components/Anuncio";
import EditarProduto from "@/components/CriarProduto";
import UpdateProduct from "@/components/UpdateProduct";
import Link from "next/link";
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
    const useParam = useSearchParams();

    let selectedId: string
    const [product,setProduct] = useState<findUniqueProduct>();
    const [title,setTitle] = useState<string>("");

      useEffect(()=>{
        selectedId = String(router.query.id)
        if(selectedId != "undefined"){
         fetchProducts(selectedId)
        }
      },[router.query.id])

      const fetchProducts = async (id:string) => {
        try {
          const response = await fetch("/api/products?id="+id);
          console.log(response)
          if (!response.ok) throw new Error("Failed to fetch: look at index.tsx");
          const data = await response.json();
          setProduct(data)
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      /* const handleSubmit = async (e: FormEvent) => {
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
            body: JSON.stringify({product}),
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
            redirect("admin");

          } else {
            throw new Error("Failed to add product");
          }
        } catch (error) {
          console.error("Error adding product - catch:", error);
          setError("failed to add product");
        }
      };
 */

    return(
      <div className="p-6 min-h-screen">
            <h1 className="ml-6 mt-4 mb-10 text-black font-bold text-3xl">Atualizar Produto - {product?.id}</h1>
            <table className="text-black min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Categoria</th>
                        <th className="border px-4 py-2">Valor</th>
                        <th className="border px-4 py-2">Custo</th>
                        <th className="border px-4 py-2">Ativo</th>
                    </tr>
                </thead>
                <tbody>
                      <tr>
                            <td className="border"><input className="m-0 text-black" type="text" value={String(product?.id)}></input></td>
                            <td className="border px-4 py-2"><input className="m-0 text-black" type="text" value={String(product?.title)}></input></td>
                            <td className="border px-4 py-2"><input className="m-0 text-black" type="text" value={String(product?.description)}></input></td>
                            <td className="border px-4 py-2"><input className="m-0 text-black" type="text" value={String(product?.price)}></input></td>
                            <td className="border px-4 py-2"><input className="m-0 text-black" type="text" value={String(product?.cost)}></input></td>
                            <td className="border px-4 py-2">
                                <button
                                    className={`px-4 py-2 rounded-md ${
                                        product?.inactive ? "bg-green-500" : "bg-red-500"
                                    } text-white`}
                                >
                                    {product?.inactive ? "Ativo" : "Inativo"}
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
            <div className="flex justify-end w-full mt-5">
              <button className="mr-10 rounded-md bg-red-600 w-32 h-12 font-black text-white text-center">Cancelar</button>
              <button className="rounded-md bg-green-600 w-40 h-12 font-black text-white text-center"
                //onClick={handleSubmit}
                >Atualizar</button>
              
            </div>
        </div>
    );
    
}

