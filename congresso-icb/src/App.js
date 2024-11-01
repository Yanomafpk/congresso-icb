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
      <header className="bg-primary h-16 mx-auto p-6 flex items-center justify-between">
        <img src={logo} alt="Logo da conferência" className="w-16 h-16 object-contain" />
        <nav className="flex space-x-6 text-base">
          <a href="#About" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(aboutRef)}>About</a>
          <a href="#Speakers" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(speakersRef)}>Speakers</a>
          <a href="#Commite" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(commiteRef)}>Committee</a>
        </nav>
      </header>

      <div className="flex justify-center mt-8">
        <img src={imagem} alt="Imagem representativa da conferência" className="h-48 object-contain" />
      </div>

      <div className="mt-8 px-8 md:px-16" ref={aboutRef}>
        <h1 className="text-3xl font-inter font-bold text-customColor text-center">About The Meeting</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
        <p className="mt-6 text-left text-base">
          Fundamental Aspects of DNA Repair and Mutagenesis (FARM-DNA) is an international conference in the area of DNA repair, mutagenesis, and genomic stability, that fosters interactions between scientists and students in a stimulating and open setting that facilitates the exchange of ideas and expertise.
        </p>
        <p className="mt-4 text-left text-base">
          Previous editions were held in São Paulo (1999, 2003, 2007, 2013 and 2018) and in Belo Horizonte (2009). The 2013 and 2018 editions were satellite meetings to the International Conference on Environmental Mutagenesis (ICEM - 2013) and the International Congress of Genetics (ICG - 2018), and the 2025 edition will be a satellite meeting to the Brazilian Mutagenesis Society meeting in Natal.
        </p>
      </div>

      <div className="mt-12 px-8 md:px-16" ref={speakersRef}>
        <h1 className="text-3xl font-inter font-bold text-customColor text-center">Invited Speakers</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        <div className="grid grid-cols-1 min400:grid-cols-2 gap-4 w-full md:w-10/12 mx-auto p-4 text-base">
          {/* Coluna 1 */}
          <div className="bg-gray-100 p-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Andrés Aguilera</h3>
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
                <p>(CEA, France)</p>
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
          <div className="bg-gray-100 p-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">David Wilson</h3>
                <p>(Hasselt Univ., Belgium)</p>
              </div>
              <div>
                <h3 className="font-semibold">Patricia Kannouche</h3>
                <p>(Gustave Roussy Institute, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Richard McCulloch</h3>
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
                <p>(INSERM, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Pablo Radicella</h3>
                <p>(CEA, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Carlos Robello</h3>
                <p>(Institute Pasteur, Uruguay)</p>
              </div>
              <div>
                <h3 className="font-semibold">Alain Sarasin</h3>
                <p>(Gustave Roussy Institute, France)</p>
              </div>
              <div>
                <h3 className="font-semibold">Marcus Smolka</h3>
                <p>(Cornell Univ., USA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 px-8 md:px-16" ref={commiteRef}>
        <h1 className="text-3xl font-inter font-bold text-customColor text-center">Organizing Committee</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        <div className="text-center space-y-4 text-base">
          <h3>Rodrigo Galhardo (Univ. São Paulo, Brazil)</h3>
          <h3>Nícolas Hoch (Univ. São Paulo, Brazil)</h3>
          <h3>Carlos Menck (Univ. São Paulo, Brazil)</h3>
          <h3>Nadja Pinto (Univ. São Paulo, Brazil)</h3>
          <h3>Roger Woodgate (NIH, USA)</h3>
        </div>
        <div className="mt-8 text-center w-full md:w-[56%] mx-auto">
          <h2 className="font-bold text-lg">THE CONFERENCE WEBSITE IS UNDER CONSTRUCTION AND ADDITIONAL INFORMATION WILL BE AVAILABLE SHORTLY.</h2>
        </div>
      </div>

      <footer className="footer mt-12">
        <div className="footer-content flex justify-center">
          <img src={logofooter} alt="Logo do rodapé da conferência" className="w-40 h-40" />
        </div>
        <div className="footer-text text-center text-base text-gray-600 mt-6">
          <p>&copy; 2025 FARM-DNA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
