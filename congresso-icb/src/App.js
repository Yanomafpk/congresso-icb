import './App.css';
import logo from './Farm 2025 (1) 1.png';
import imagem from './Farm 2025 (3) 1.svg';
import logofooter from './logofooter.png';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const speakersRef = useRef(null);
  const commiteRef = useRef(null);

  const handleScrollTo = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Delay de 300ms antes de rolar
  };

  return (
    <div className="App">
      <header className="bg-primary h-14 mx-auto p-4 flex items-center justify-between">
        <img src={logo} alt="Logo da conferência" className="w-12 h-12 object-contain" />
        <nav className="flex space-x-4 text-xs">
          <a href="#About" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(aboutRef)}>About</a>
          <a href="#Speakers" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(speakersRef)}>Speakers</a>
          <a href="#Commite" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(commiteRef)}>Committee</a>
        </nav>
      </header>

      <div className="flex justify-center mt-6">
        <img src={imagem} alt="Imagem representativa da conferência" className="h-36 object-contain" />
      </div>

      <div className="mt-6 px-4 md:px-12" ref={aboutRef}>
        <h1 className="text-2xl font-inter font-bold text-customColor text-center">About The Meeting</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
        <p className="mt-4 text-left text-xs">
          Fundamental Aspects of DNA Repair and Mutagenesis (FARM-DNA) is an international conference in the area of DNA repair, mutagenesis, and genomic stability, that fosters interactions between scientists and students in a stimulating and open setting that facilitates the exchange of ideas and expertise.
        </p>
        <p className="mt-4 text-left text-xs">
          Previous editions were held in São Paulo (1999, 2003, 2007, 2013 and 2018) and in Belo Horizonte (2009). The 2013 and 2018 editions were satellite meetings to the International Conference on Environmental Mutagenesis (ICEM - 2013) and the International Congress of Genetics (ICG - 2018), and the 2025 edition will be a satellite meeting to the Brazilian Mutagenesis Society meeting in Natal.
        </p>
      </div>

      <div className="mt-8 px-4 md:px-8" ref={speakersRef}>
      <h1 className="text-2xl font-inter font-bold text-customColor text-center">Invited Speakers</h1>
      <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
      <div className="grid grid-cols-1 min400:grid-cols-2 gap-4 w-full md:w-10/12 mx-auto p-2 text-[10px]">
        {/* Coluna 1 */}
        <div className="bg-gray-100 p-2">
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
              <h3 className="font-semibold">Evi Soutoglou</h3>
              <p>(Univ. Sussex, UK)</p>
            </div>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="bg-gray-100 p-2">
          <div className="space-y-2">
            <div>
              <h3 className="font-semibold">David Wilson</h3>
              <p>(Hasselt Univ., Belgium)</p>
            </div>
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
          </div>
        </div>
      </div>
    </div>

      <div className="mt-8 px-4 md:px-12" ref={commiteRef}>
        <h1 className="text-2xl font-inter font-bold text-customColor text-center">Organizing Committee</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        <div className="text-center space-y-2 text-xs">
          <h3 className="">Rodrigo Galhardo (Univ. São Paulo, Brazil)</h3>
          <h3 className="">Nícolas Hoch (Univ. São Paulo, Brazil)</h3>
          <h3 className="">Carlos Menck (Univ. São Paulo, Brazil)</h3>
          <h3 className="">Nadja Pinto (Univ. São Paulo, Brazil)</h3>
          <h3 className="">Roger Woodgate (NIH, USA)</h3>
        </div>
        <div className="mt-6 text-center w-full md:w-[56%] mx-auto">
          <h2 className="font-bold">THE CONFERENCE WEBSITE IS UNDER CONSTRUCTION AND ADDITIONAL INFORMATION WILL BE AVAILABLE SHORTLY.</h2>
        </div>
      </div>

      <footer className="footer mt-8">
        <div className="footer-content flex justify-center">
          <img src={logofooter} alt="Logo do rodapé da conferência" className="w-32 h-32" />
        </div>
        <div className="footer-text text-center text-xs text-gray-600 mt-4">
          <p>&copy; 2025 FARM-DNA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
