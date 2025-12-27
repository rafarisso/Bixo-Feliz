
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="bg-orange-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-400 rounded-full opacity-20"></div>
          
          <div className="z-10 md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-6">Venha nos visitar!</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400/30 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-orange-100">Rua da Felicidade Pet, 123 - Centro<br/>Belo Horizonte, MG</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-400/30 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                  <div className="text-orange-100">
                    <p>Segunda a Sábado: <span className="font-bold text-white">08:00 às 19:00</span></p>
                    <p>Domingo: <span className="font-bold text-white">09:00 às 14:00</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-400/30 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefone / WhatsApp</h4>
                  <p className="text-orange-50 font-bold text-xl">(31) 98765-4321</p>
                </div>
              </div>
            </div>
          </div>

          <div className="z-10 md:w-1/2 bg-white rounded-3xl p-8 text-gray-800 shadow-2xl">
            <h3 className="text-2xl font-fredoka font-bold mb-6 text-orange-600 text-center">Agende via WhatsApp</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Seu Nome</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Ex: João da Silva"/>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="(31) 99999-9999"/>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Qual serviço deseja?</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Banho e Tosa</option>
                  <option>Consulta Veterinária</option>
                  <option>Dúvidas sobre Rações</option>
                  <option>Informações sobre Filhotes</option>
                </select>
              </div>
              <button type="button" onClick={() => window.open('https://wa.me/5531987654321', '_blank')} className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>Chamar no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
