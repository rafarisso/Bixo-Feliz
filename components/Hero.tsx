
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-orange-50 overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 scroll-mt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 mb-6 items-center md:items-start">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-200 text-orange-700 font-bold text-xs shadow-sm">
              Seg-Sáb: 08:00 às 19:00
            </span>
            <span className="inline-block px-4 py-1 rounded-full bg-white text-orange-600 font-bold text-xs border border-orange-200 shadow-sm">
              Dom: 09:00 às 14:00
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-fredoka font-bold text-gray-800 leading-tight mb-6">
            Onde seu pet é o <span className="text-orange-500">mais feliz!</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            No Bixo Feliz, cuidamos do seu melhor amigo com todo o carinho que ele merece. 
            Banho e tosa profissional, as melhores rações e novos amiguinhos esperam por você.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button 
              onClick={() => scrollTo('services')}
              className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all active:scale-95"
            >
              Ver Serviços
            </button>
            <button 
              onClick={() => scrollTo('products')}
              className="bg-white text-orange-600 border-2 border-orange-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all active:scale-95"
            >
              Comprar Rações
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-orange-200 rounded-full filter blur-3xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
            alt="Golden Retriever Feliz" 
            className="relative z-10 w-full max-w-md h-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
          />
        </div>
      </div>
      
      {/* Divisor de onda decorativo */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.05,110.19,132.38,103.57,209.11,92.83c50.42-7,97.16-13.67,112.28-36.39Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
