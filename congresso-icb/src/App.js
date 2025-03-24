import './App.css';
import logo from './Farm 2025 (1) 1.png';
import imagem from './Farm 2025 (3) 1.svg';
import logofooter from './logofooter.png';
import { useRef } from 'react';
import React, { useState } from 'react';

function App() {
  const aboutRef = useRef(null);
  const speakersRef = useRef(null);
  const commiteRef = useRef(null);

  const handleScrollTo = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Delay de 300ms antes de rolar
  };
  const [activeDay, setActiveDay] = useState('day1');

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
      <div className="mt-12 px-8 md:px-16">
      <h1 className="text-3xl font-inter font-bold text-customColor text-center">Conference Schedule</h1>
      <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-8"></div>
      
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button 
          className={`py-4 px-6 font-medium transition-colors ${activeDay === 'day1' ? 'bg-teal-800' : 'bg-teal-400'} text-white`}
          onClick={() => setActiveDay('day1')}
        >
          November 1st
        </button>
        <button 
          className={`py-4 px-6 font-medium transition-colors ${activeDay === 'day2' ? 'bg-teal-800' : 'bg-teal-400'} text-white`}
          onClick={() => setActiveDay('day2')}
        >
          November 2nd
        </button>
        <button 
          className={`py-4 px-6 font-medium transition-colors ${activeDay === 'day3' ? 'bg-teal-800' : 'bg-teal-400'} text-white`}
          onClick={() => setActiveDay('day3')}
        >
          November 3rd
        </button>
      </div>
      
      {/* Schedule for November 1st */}
      {activeDay === 'day1' && (
        <div className="space-y-4 mb-8">
          {/* Registration */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">8:00 - 10:00</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="font-medium">Registration</div>
              <div className="text-sm text-gray-600">(short courses on DNA repair and Mutagenesis from 10:00 to 12:30 hs)</div>
            </div>
          </div>
          
          {/* Debate */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">10:00 - 12:00</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="font-medium">Debate of the Theme "The Evolution is a Fact"</div>
              <div className="text-sm text-gray-600">(in Portuguese) with the book (same title) published by the Brazilian Academy of Sciences in 2024, with the participation of students from a public High School.</div>
            </div>
          </div>
          
          {/* Opening */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">14:00 - 14:30</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="font-medium">VII FARM-DNA Opening</div>
              <div className="text-sm">
                <span className="font-medium">Carlos Frederico Martins Menck</span>
                <p>Why do we need a FARM-DNA meeting in Brazil?</p>
              </div>
            </div>
          </div>
          
          {/* Opening Lectures */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">14:30 - 16:00</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="font-medium">Opening Lectures</div>
              <div className="mt-2">
                <div className="mb-3">
                  <p className="text-sm text-gray-600">Chair: Nadja C. de Souza-Pinto</p>
                  <p className="font-medium">Andres Aguilera, Universidad de Sevilla, Seville, Spain</p>
                  <p className="text-sm">Transcription-replication conflicts in genome instability, a different role for RNA and chromatin</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Chair: Carlos Frederico Martins Menck</p>
                  <p className="font-medium">Alain Sarasin, Institut Goustave Roussi, Villejuif, France</p>
                  <p className="text-sm">Genomic Analysis of Internal Cancers from Xeroderma Pigmentosum Patients Revealed New Mechanisms of Endogenous Mutagenesis</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coffee Break */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">16:00 - 16:30</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="font-medium">Coffee break</div>
            </div>
          </div>
          
          {/* Symposium 1 */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">16:30 - 18:30</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="bg-teal-500 text-white p-2 rounded mb-3">
                <div className="font-medium">Symposium 1 – DNA damage and cancer</div>
                <div className="text-sm">Chair: Roger Woodgate</div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Mark O'Connor, Oncology R&D, AstraZeneca, Cambridge, UK</p>
                  <p className="text-sm">Targeting tumour DNA repair vulnerabilities to generate new cancer therapies</p>
                </div>
                <div>
                  <p className="font-medium">Jenifer Saffi, UFSPA, RS, Brazil</p>
                  <p className="text-sm">DNA damage response: influence on the toxicity of antineoplastic compounds and potential value as predictive and prognostic markers in colorectal cancer</p>
                </div>
                <div>
                  <p className="font-medium">Abby Green, Washington University, St. Louis, USA</p>
                  <p className="text-sm">Exploiting mutagenic processes in cancer for therapeutic benefit</p>
                </div>
                <div>
                  <p className="font-medium">Leonardo Karran Teixeira, Brazilian National Cancer Institute (INCA), Rio de Janeiro, RJ, Brazil</p>
                  <p className="text-sm">Oncogene-induced replication stress and genomic instability in human cancer</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-600">Short talk (15 min)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Welcome Drink */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium mt-1">19:00</div>
            </div>
            <div className="bg-white rounded p-3 flex-grow shadow-sm">
              <div className="font-medium">Welcome Drink!</div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-12 px-8 md:px-16" ref={commiteRef}>
        <h1 className="text-3xl font-inter font-bold text-customColor text-center">Organizing Committee</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        <div className="text-center space-y-4 text-base">
          <h3>Rodrigo Galhardo (Univ. São Paulo, Brazil)</h3>
          <h3>Nícolas Hoch (Univ. São Paulo, Brazil)</h3>
          <h3>Carlos Menck (Univ. São Paulo, Brazil)</h3>
          <h3>Nadja Souza-Pinto (Univ. São Paulo, Brazil)</h3>
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
    </div>
  );
}

export default App;
