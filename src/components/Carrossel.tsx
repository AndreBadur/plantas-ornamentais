import { useState, useEffect } from "react";

const Carrossel: React.FC = () => {
  const images = [
    "/imagens/vaso.png",
    "/imagens/vaso.png",
    "/imagens/vaso.png",
    "/imagens/vaso.png",
  ];

  // Estado para o índice da imagem atual
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Função para ir para o próximo conjunto de 3 imagens
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para ir para o conjunto anterior de 3 imagens
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Adiciona a rotação automática do carrossel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Mudar a cada 5 segundos

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Contêiner para as imagens com animação */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Move o carrossel em 1/3 da largura
        }}
      >
        {/* Renderiza as imagens */}
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 flex-shrink-0 flex justify-center items-center" // Ajusta para 3 imagens visíveis
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-56 h-56 object-contain" // Ajusta a imagem para não esticar
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
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
  );
};

export default Carrossel;
