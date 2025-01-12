import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Carrossel: React.FC = () => {
    const images = [
        '/imagens/vaso.png',
        '/imagens/vaso2.png',
        '/imagens/vaso3.png',
        '/imagens/vaso4.png',
        '/imagens/vaso5.png',
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        )
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000) 

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full h-64 overflow-hidden mt-4">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Move o carrossel em 1/3 da largura
                }}
            >

                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/3 flex-shrink-0 flex justify-center items-center" // Ajusta para 3 imagens visíveis
                    >
                        <Link href="search">
                            <Image 
                                src={image} alt={`Slide ${index}`} className="w-56 h-56 object-contain"
                            />                            
                        </Link>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black bg-opacity-50 rounded-full"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black bg-opacity-50 rounded-full"
            >
                &gt;
            </button>
        </div>
    )
}

export default Carrossel
