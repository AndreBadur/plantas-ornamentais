export async function fetchProducts () {
    try {
        const response = await fetch('/api/products')
        if (!response.ok){
            throw new Error('Failed to fetch: look at index.tsx')
        }
            
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}
