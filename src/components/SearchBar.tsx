import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
    const searchParam = useSearchParams()
    const id = searchParam.get('id')

    return id
}
