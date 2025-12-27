
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'services' },
    { label: 'Rações', id: 'products' },
    { label: 'Animais', id: 'pets' },
    { label: 'Contato', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-orange-500 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-2xl font-fredoka font-bold text-orange-600">Bixo Feliz</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5531987654321" 
            target="_blank" 
            className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition-all flex items-center shadow-md hover:shadow-lg"
          >
             <span>Agendar Banho</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 flex flex-col space-y-6 px-4 shadow-xl animate-in slide-in-from-top">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-gray-700 font-bold text-lg border-b border-gray-50 pb-2"
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <button 
             onClick={() => {
                const contact = document.getElementById('contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
             }}
             className="bg-orange-500 text-white text-center py-4 rounded-xl font-bold shadow-lg"
          >
            Agendar Agora
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
