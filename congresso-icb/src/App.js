
import './App.css';
import logo from './Farm 2025 (1) 1.png'
import imagem from './Farm 2025 (3) 1.svg'
function App() {
  return (
    <div className="App">
      <header className="bg-primary h-14 mx-auto p-4 flex items-center justify-between">
          <img src={logo} alt="Descrição da imagem" className="w-12 h-12 object-contain" />
          <nav className="flex space-x-4 text-xs"> {/* Remove as classes de ocultação */}
              <a href="#home" className="text-white hover:text-gray-300">Home</a>
              <a href="#about" className="text-white hover:text-gray-300">About</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </nav>
      </header>
      <div className="flex justify-center">
          <img src={imagem} alt="Descrição da imagem" className="h-36 object-contain" />
      </div>
      <div>
        <h1 className='text-2xl font-inter font-bold text-customColor '>About The Meeting</h1>
        <div className="w-4/5 h-px bg-gray-500 mt-4 mx-auto" ></div>
        <p className="mt-4 px-12 text-left text-xs"> {/* Adiciona margin top e padding horizontal */}
          Fundamental Aspects of DNA Repair and Mutagenesis (FARM-DNA) is an international conference in the area of DNA repair, mutagenesis, and genomic stability, that fosters interactions between scientists and students in a stimulating and open setting that facilitates the exchange of ideas and expertise.
        </p>    
        <p className="mt-4 px-12 text-left text-xs"> {/* Adiciona margin top e padding horizontal */}
          Previous editions were held in São Paulo (1999, 2003, 2007, 2013 and 2018) and in Belo Horizonte (2009). The 2013 and 2018 editions were satellite meetings to the International Conference on Environmental Mutagenesis (ICEM - 2013) and the International Congress of Genetics (ICG - 2018), and the 2025 edition will be a satellite meeting to the Brazilian Mutagenesis Society meeting in Natal.        
        </p>      
      </div>
      <div>
        <h1 className='mt-4 text-2xl font-inter font-bold text-customColor '>Invited Speakers</h1>
        <div className="w-4/5 h-px bg-gray-500 mt mx-auto" ></div>
        <div className="flex justify-around w-full p-4 text-xs">
          {/* Primeira Lista */}
          <div className="w-2/5 mx-auto p-4 bg-gray-100 "> {/* Largura 40% */}
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold">Andres Aguillera</h3>
                <p>(Univ. Seville, Spain)</p>
              </div>
              <div>
                <h3 className="font-semibold">Luís Batista</h3>
                <p>(Washington Univ. St. Louis, USA)</p>
              </div>
              <div>
                <h3 className="font-semibold">Vilhelm Bohr</h3>
                <p>(Univ. Copenhagen, Denmark)</p>
              </div>
              <div>
                <h3 className="font-semibold">Keith Caldecott</h3>
                <p>(Univ. Sussex, UK)</p>
              </div>
              <div>
                <h3 className="font-semibold">Anna Campalans</h3>
                <p>(Univ. Paris-Cité, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Vanesa Gottifredi</h3>
                <p>(Institute Leloir, Argentina)</p>
              </div>
              <div>
                <h3 className="font-semibold">Abby Green</h3>
                <p>(Washington Univ. St. Louis, USA)</p>
              </div>
              <div>
                <h3 className="font-semibold">Jan Hoeijmakers</h3>
                <p>(Erasmus MC, Netherlands)</p>
              </div>
              <div>
                <h3 className="font-semibold">Gianluca Tell</h3>
                <p>(Univ. Udine, Italy)</p>
              </div>
              <div>
                <h3 className="font-semibold">Stephen West</h3>
                <p>(Francis Crick Institute, UK)</p>
              </div>
              <div>
                <h3 className="font-semibold">David Wilson</h3>
                <p>(Hasselt Univ., Belgium)</p>
              </div>
            </div>
          </div>

          {/* Segunda Lista */}
          <div className="w-2/5 mx-auto p-4 bg-gray-100"> {/* Largura 40% */}
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold">Patricia Kannouche</h3>
                <p>(Univ. Paris-Saclay, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Richard McCullock</h3>
                <p>(Univ. Glasgow, Scotland)</p>
              </div>
              <div>
                <h3 className="font-semibold">Manuel Muñoz</h3>
                <p>(Univ. Buenos Aires, Argentina)</p>
              </div>
              <div>
                <h3 className="font-semibold">André Nussenzweig</h3>
                <p>(NIH, USA)</p>
              </div>
              <div>
                <h3 className="font-semibold">Annabel Quinet</h3>
                <p>(Univ. Paris-Cité, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Pablo Radicella</h3>
                <p>(CEA Paris, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Carlos Robello</h3>
                <p>(Institute Pasteur, Uruguay)</p>
              </div>
              <div>
                <h3 className="font-semibold">Alain Sarasin</h3>
                <p>(Institute Gustave Roussy, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Markus Smolka</h3>
                <p>(Cornell Univ., USA)</p>
              </div>
              <div>
                <h3 className="font-semibold">Evi Soutoglou</h3>
                <p>(Univ. Sussex, UK)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
