
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-200 selection:text-orange-900">
      <Header />

      <main>
        {/* Início */}
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>

        {/* Serviços: Banho e Tosa, Geral */}
        <Services />

        {/* Estatísticas Rápidas */}
        <section className="py-20 bg-orange-500 text-white overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-fredoka font-bold mb-2">10+</div>
                <div className="text-orange-100 uppercase tracking-widest text-sm">Anos de Carinho</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-fredoka font-bold mb-2">5k+</div>
                <div className="text-orange-100 uppercase tracking-widest text-sm">Pets Felizes</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-fredoka font-bold mb-2">AI</div>
                <div className="text-orange-100 uppercase tracking-widest text-sm">Assistente Online</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-fredoka font-bold mb-2">365</div>
                <div className="text-orange-100 uppercase tracking-widest text-sm">Dias Aberto</div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Animais */}
        <section id="pets" className="py-24 bg-white scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-gray-800 mb-6">Novos amiguinhos esperando por você</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Trabalhamos com criadores certificados para garantir que seu novo companheiro venha de um ambiente saudável e amoroso. Temos filhotes de cães, gatos, hamsters, coelhos e pássaros.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Acompanhamento Veterinário Inicial',
                      'Primeira Dose de Vacina Inclusa',
                      'Kit de Boas-Vindas Grátis',
                      'Orientação de Manejo e Cuidados'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-700">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-block bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg"
                  >
                    Quero Adotar / Comprar
                  </button>
               </div>
               <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400" alt="Pet 1" className="w-full rounded-2xl shadow-md transform -rotate-3 hover:rotate-0 transition-all duration-300"/>
                  <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400" alt="Pet 2" className="w-full rounded-2xl shadow-md transform rotate-3 hover:rotate-0 transition-all duration-300 translate-y-8"/>
                  <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400" alt="Pet 3" className="w-full rounded-2xl shadow-md transform rotate-2 hover:rotate-0 transition-all duration-300"/>
                  <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400" alt="Pet 4" className="w-full rounded-2xl shadow-md transform -rotate-2 hover:rotate-0 transition-all duration-300 translate-y-8"/>
               </div>
            </div>
          </div>
        </section>

        {/* Seção Rações */}
        <section id="products" className="py-24 bg-gray-50 scroll-mt-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-gray-800 mb-4">Melhores Rações</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Qualidade nutritiva para cada fase da vida do seu pet.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Ração Premium Cães', price: 'R$ 189,90', img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=400' },
                { name: 'Ração Especial Gatos', price: 'R$ 145,00', img: 'https://images.unsplash.com/photo-1591160612666-4b680512f453?auto=format&fit=crop&q=80&w=400' },
                { name: 'Petiscos Naturais', price: 'R$ 25,90', img: 'https://images.unsplash.com/photo-1582739130005-758c0789995e?auto=format&fit=crop&q=80&w=400' },
                { name: 'Ração Filhotes', price: 'R$ 199,00', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400' },
              ].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                  <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-2xl mb-4"/>
                  <h4 className="font-bold text-gray-800 mb-2">{p.name}</h4>
                  <p className="text-orange-600 font-bold text-lg mb-4">{p.price}</p>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full py-2 bg-orange-100 text-orange-600 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all text-sm"
                  >
                    Encomendar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
