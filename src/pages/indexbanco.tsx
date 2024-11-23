import Categorias from "@/components/macrocomponent/Categorias";
import { FormEvent, useEffect, useState } from "react";

interface Products{
    id: number;
    title: string;
    price: number;
    description: string;
    cost: number;
}


export default function home(){
    const [products, setProducts] = useState<Products[]>([]);
    const [error, setError] = useState<string>('');
    const [title,setTitle] = useState<string>('');
    const [price,setPrice] = useState<number>(0);
    const [description,setDescription] = useState<string>('');
    const [cost, setCost] = useState<number>(0);

useEffect(()=>{
    fetchProducts();
},[]);

const fetchProducts = async () =>{
    try {
        const response = await fetch('/api/products')

        if(!response.ok) throw new Error('Failed to fetch: look at index.tsx');
        const data = await response.json();
        setProducts(data);    
    } catch (error) {
        console.error('Error fetching products:', error)
    }
    
}

const handleSubmit = async(e: FormEvent) =>{
    e.preventDefault();
    
    if(!title || !price){
            setError('Erro de entrada no formulário');
            return;
    }
    try {
        const response = await fetch('/api/products',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, description, price, cost}),
        });

            if(response.ok){
                const newProduct = await response.json();
                setProducts((prevProducts) => [...prevProducts, newProduct]);
                setTitle('');
                setDescription('');
                setPrice(0);
                setCost(0);
                setError('');
            } else {
                throw new Error('Failed to add product');
            }
    } catch (error) {
        console.error('Error adding product - catch:',error);
        setError('failed to add product');
        }
    };
    return(
        <div className="flex flex-col">
            <div>
                <h1>Menu</h1>
            </div>
            <div>
                <h1>Imagem</h1>
            </div>
            <div className="bg-slate-300">
                <Categorias/>
            </div>
            <div>
                <h1>Produtos</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                    />
                    <label htmlFor="cost">Cost</label>
                    <input
                        type="number"
                        id="cost"
                        value={cost}
                        onChange={(e) => setCost(+e.target.value)}
                    />
                    <button className="bg-green-400" type="submit">Add User</button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display the list of users */}
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                <li key={product.id}>
                    {product.title} - {product.description} - {product.price} - {product.cost}
                </li>
                ))}
            </ul>

            </div>
            <div>
                <h1>Header</h1>
            </div>
            
        </div>
    )
}