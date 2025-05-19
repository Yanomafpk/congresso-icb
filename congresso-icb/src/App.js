import './App.css';
import logo from './logo.svg';
import imagem from './image_content.svg';
import logofooter from './foote_image.svg';
import { useRef } from 'react';
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";

function App() {
  const aboutRef = useRef(null);
  const speakersRef = useRef(null);
  const schedule = useRef(null);
  const commiteRef = useRef(null);
  const abstractRef = useRef(null);
  const posterInformation = useRef(null);
  const registration = useRef(null);
  

  const handleScrollTo = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Delay de 300ms antes de rolar
  };
  
  const [activeDay, setActiveDay] = useState('day1');
  const [prevActiveDay, setPrevActiveDay] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleDayChange = (day) => {
    if (day === activeDay) return;
    
    setPrevActiveDay(activeDay);
    setActiveDay(day);
    setAnimating(true);
    
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  // Day schedules - make sure each day has unique content
  const daySchedules = {
    day1: [
      {
        time: "8:00 - 10:00",
        title: "Registration",
        description: "(short courses on DNA repair and Mutagenesis from 10:00 to 12:30 hs)"
      },
      {
        time: "10:00 - 12:00",
        title: "Debate of the Theme (The Evolution is a Fact)",
        description: "(in Portuguese) with the book (same title) published by the Brazilian Academy of Sciences in 2024, with the participation of students from a public High School."
      },
      {
        time: "14:00 - 14:30",
        title: "VII FARM-DNA Opening",
        description: "Carlos Frederico Martins Menck - Why do we need a FARM-DNA meeting in Brazil?"
      },
      {
        time: "14:30 - 16:00",
        title: "Opening Lectures",
        isComplex: true,
        content: (
          <div className="mt-2 text-left">
            <div className="mb-3 text-left">
              <p className="font-medium  text-gray-600 text-left ">Chair: Nadja C. de Souza-Pinto</p>
              <p className="font-medium text-gray-900 text-left">Andres Aguilera, Universidad de Sevilla, Seville, Spain</p>
              <p className="text-sm text-gray-600 text-left">Transcription-replication conflicts in genome instability, a different role for RNA and chromatin</p>
            </div>
            <div className="text-left">
              <p className="font-medium  text-gray-600 text-left">Chair: Carlos Frederico Martins Menck</p>
              <p className="font-medium text-gray-900 text-left">Alain Sarasin, Institut Goustave Roussi, Villejuif, France</p>
              <p className="text-sm text-gray-600 text-left">Genomic Analysis of Internal Cancers from Xeroderma Pigmentosum Patients Revealed New Mechanisms of Endogenous Mutagenesis</p>
            </div>
          </div>
        )
      },
      {
        time: "16:00 - 16:30",
        title: "Coffee break"
      },
      {
        time: "16:30 - 18:30",
        title: "Symposium 1 – DNA damage and cancer",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Roger Woodgate</p>
              <p className="text-sm text-gray-600 text-left">Targeting tumour DNA repair vulnerabilities to generate new cancer therapies</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Jenifer Saffi, UFSPA, RS, Brazil</p>
              <p className="text-sm text-gray-600 text-left">DNA damage response: influence on the toxicity of antineoplastic compounds and potential value as predictive and prognostic markers in colorectal cancer</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Patricia Opresko, Univ. Pittsburgh, USA</p>
              <p className="text-sm text-gray-600 text-left">Oxidative DNA Damage and Repair at Telomeres</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Abby Green, Washington University, St. Louis, USA</p>
              <p className="text-sm text-gray-600 text-left">Exploiting mutagenic processes in cancer for therapeutic benefit</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Leonardo Karam Teixeira, Brazilian National Cancer Institute (INCA), Rio de Janeiro, RJ, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Oncogene-induced replication stress and genomic instability in human cancer</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-left">Short talk (15 min)</p>
            </div>
          </div>
        )
      },
      {
        time: "19:00",
        title: "Welcome Drink!"
      }
    ],
    day2: [
      {
        time: "8:30 - 10:30",
        title: "Symposium 2 – Replication through DNA damage",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Leonardo Karam Teixeira</p>
              <p className="font-medium text-gray-900 text-left">Andre Nussenzweig, National Cancer Institute National Institutes of Health, Rockville, MD, USA</p>
              <p className="text-sm text-gray-600 text-left">Structure and repair of replication-coupled DNA breaks</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Vanesa Gottifredi, Fundación Instituto Leloir, IIBBA/ CONICET, Buenos Aires, Argentina</p>
              <p className="text-sm text-gray-600 text-left">Chromosomal instability: a prelude to cell killing or an avoidable side effect of chemotherapy</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Keith Caldecott, University of Sussex, Falmer, Brighton, UK</p>
              <p className="text-sm text-gray-600 text-left">PARP activity in DNA replication, repair and human disease</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Maria Carolina Q B Elias Sabbaga, Instituto Butantan, São Paulo, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Insights into DNA Replication and Its Potential Influence on Trypanosoma cruzi's Infection</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-left">Short talk (15 min)</p>
            </div>
          </div>
        )
      },
      {
        time: "10:30 - 11:00",
        title: "Coffee break"
      },
      {
        time: "11:00 - 13:00",
        title: "Symposium 3- Genomic stress and aging",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Rodrigo Galhardo</p>
              <p className="font-medium text-gray-900 text-left">Vilhelm Bohr, University of Copenhagen, Copenhagen, Denmark</p>
              <p className="text-sm text-gray-600 text-left">DNA damage signaling to mitochondria in neurodegeneration and aging</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Manuel Muñoz, Universidad de Buenos Aires, Buenos Aires, Argentina</p>
              <p className="text-sm text-gray-600 text-left">RNA Polymerase II Degradation Triggered by DNA Repair Occurs In Trans and Independently of how the Lesion is Recognised</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">David M Wilson 3rd, Hasselt University, Diepenbeek, Belgium</p>
              <p className="text-sm text-gray-600 text-left">Genomic Stress and DNA Repair Mechanisms in the Second Brain</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Nadja C de Souza-Pinto, Institute of Chemistry, University of Sao Paulo, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Mitochondrial DNA methylation at the crossroads between transcription and repair</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-left">Short talk (15 min)</p>
            </div>
          </div>
        )
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch Break"
      },
      {
        time: "14:00 - 15:30",
        title: "Full lectures",
        isComplex: true,
        content: (
          <div className="mt-2 text-left">
            <div className="mb-3 text-left">
              <p className="font-medium  text-gray-600 text-left">Chair: Carlos Renato Machado</p>
              <p className="font-medium text-gray-900 text-left">Richard McCulloch, University of Glasgow, Glasgow, UK</p>
              <p className="text-sm text-gray-600 text-left">A coherent model for the initiation and execution of trypanosome immune evasion through targeted antigen gene recombination?</p>
            </div>
            <div className="text-left">
              <p className="font-medium  text-gray-600 text-left">Chair: Carlos Frederico Martins Menck</p>
              <p className="font-medium text-gray-900 text-left">Roger Woodgate, National Institutes of Health, Bethesda, MD, USA</p>
              <p className="text-sm text-gray-600 text-left">Regulation of Highly Mutagenic PolVR391 in Enterobacteriaceae</p>
            </div>
          </div>
        )
      },
      {
        time: "15:30 - 15:50",
        title: "Coffee break"
      },
      {
        time: "15:50 - 17:15",
        title: "Symposium 4 – Is DNA repair similar for different organisms?",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Nicolas Carlos Hoch</p>
              <p className="font-medium text-gray-900 text-left">Rodrigo Galhardo, Institute of Biomedical Sciences, Universidade de São Paulo, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Unveiling novel DNA repair pathways in bacteria</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">J Pablo Radicella, UMR Stabilité Génétique Cellules Souches et Radiations, F-92260 Fontenay-aux-Roses, France</p>
              <p className="text-sm text-gray-600 text-left">Dissecting the mechanisms of horizontal gene transfer in Helicobacter pylori</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Carlos Renato Machado, Universidade Federal de Minas Gerais, Belo Horizonte, Brazil</p>
              <p className="text-sm text-gray-600 text-left">DNA repair in Trypanosoma cruzi: differences and similarities in an atypical organism</p>
            </div>
          </div>
        )
      },
      {
        time: "17:30 - 19:30",
        title: "Poster Session & Coffee break",
        description: "Networking and poster presentations"
      }
    ],
    day3: [
      {
        time: "8:30 - 10:30",
        title: "Symposium 5 – Responses to genome damage",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Nadja C de Souza-Pinto</p>
              <p className="font-medium text-gray-900 text-left">Nicolas Carlos Hoch, Institute of Chemistry, University of São Paulo, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Molecular mechanisms of cell death by PARP1 hyperactivation</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Evi Soutoglou, University of Sussex, Brighton, UK</p>
              <p className="text-sm text-gray-600 text-left">Genome organization in DNA repair</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Hannes Lans, Erasmus Medical Center, Rotterdam, The Netherlands</p>
              <p className="text-sm text-gray-600 text-left">Persistent DNA repair intermediates and human DNA repair disease</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Marcus Smolka, Cornell University, Ithaca, NY, USA</p>
              <p className="text-sm text-gray-600 text-left">Signaling Mechanisms Controlling Genome Maintenance</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-left">Short talk (15 min)</p>
            </div>
          </div>
        )
      },
      {
        time: "10:30 - 11:00",
        title: "Coffee break"
      },
      {
        time: "11:00 - 13:00",
        title: "Symposium 6 – DNA damage signaling in Eukaryotic cells",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Marcus Smolka</p>
              <p className="font-medium text-gray-900 text-left">Marcelo Santos da Silva, Institute of Chemistry, University of São Paulo, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Analysis of cytotoxicity caused by thymidine analogs (BrdU and EdU) incorporation in trypanosomatids</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Carlos Robello, Facultad de Medicina, Universidad de la República, Montevideo, Uruguay</p>
              <p className="text-sm text-gray-600 text-left">Epigenetic mechanisms affect gene expression in Trypanosoma cruzi</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Francisco Meirelles Bastos de Oliveira, Universidade Federal do Rio de Janeiro, RJ, Brazil</p>
              <p className="text-sm text-gray-600 text-left">The role of CDK9 in yeast DNA replication stress response</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Jose Renato Cussiol, Universidade Federal do Estado de São Paulo, SP, Brazil</p>
              <p className="text-sm text-gray-600 text-left">Inositol Pyrophosphates in Double-strand break signaling and repair</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-left">Short talk (15 min)</p>
            </div>
          </div>
        )
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch Break"
      },
      {
        time: "14:00 - 16:10",
        title: "Symposium 7 – Nuclear stress and DNA repair",
        isComplex: true,
        content: (
          <div className="space-y-3 mt-2 text-left">
            <div>
              <p className="font-medium  text-gray-600 text-left">Chair: Vanesa Gottifredi</p>
              <p className="font-medium text-gray-900 text-left">Luis LF Batista, Washington University, St. Louis, USA</p>
              <p className="text-sm text-gray-600 text-left">Genomic instability – a unifying feature of bone marrow failure syndromes</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Gianluca Tell, University of Udine, Udine, Italy</p>
              <p className="text-sm text-gray-600 text-left">Understanding the non-repair face of Base Excision Repair: novel perspectives in cancer biology</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Anna Campalans, UMR Stabilité Génétique Cellules Souches et Radiations, F-92260 Fontenay-aux-Roses, France</p>
              <p className="text-sm text-gray-600 text-left">Repair of oxidative DNA damage in the chromatin context</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Annabel Quinet, UMR Stabilité Génétique Cellules Souches et Radiations, F-92260 Fontenay-aux-Roses, France</p>
              <p className="text-sm text-gray-600 text-left">Repriming: an emerging mechanism of replication stress response in human cells</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-left">Patrícia Kannouche, Institut Gustave Roussy, Université Paris-Saclay, Villejuif, France</p>
              <p className="text-sm text-gray-600 text-left">New insights into the functions of DNA polymerase zeta in mammalian cells</p>
            </div>
          </div>
        )
      },
      {
        time: "16:10 - 16:30",
        title: "Coffee break"
      },
      {
        time: "16:30 - 18:00",
        title: "Closing Lectures",
        isComplex: true,
        content: (
          <div className="mt-2 text-left">
            <div className="mb-3 text-left">
              <p className="font-medium  text-gray-600 text-left">Chair: Carlos Frederico Martins Menck</p>
              <p className="font-medium text-gray-900 text-left">Jan Hoeijmakers, Erasmus Medical Center, Rotterdam, The Netherlands</p>
              <p className="text-sm text-gray-600 text-left">DNA damage and transcription stress and the unexpected impact of nutrition on aging and medicine</p>
            </div>
            <div className="text-left">
              <p className="font-medium  text-gray-600 text-left">Chair: Roger Woodgate</p>
              <p className="font-medium text-gray-900 text-left">Stephen West, The Francis Crick Institute, London, UK</p>
              <p className="text-sm text-gray-600 text-left">Roles of the RAD51 paralogs in DNA repair and replication fork protection – changing paradigms</p>
            </div>
          </div>
        )
      }
    ]
};
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  

  return (
    <div className="App">
      <header className="bg-primary h-16 px-6 flex items-center justify-between">
        <img src={logo} alt="Logo da conferência" className="w-16 h-16 object-contain" />

        {/* Botão hambúrguer (visível apenas em telas pequenas) */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu de navegação (visível em telas médias pra cima ou quando menu aberto) */}
        <nav
          className={`
            ${isMenuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-primary z-10 p-4 space-y-4" : "hidden"}
            md:flex md:flex-row md:space-x-6 md:static md:bg-transparent md:p-0 md:space-y-0 text-base
          `}
        >
          <a href="#About" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(aboutRef)}>About</a>
          <a href="#Abstract" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(abstractRef)}>Abstracts</a>
          <a href="#PosterInformation" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(posterInformation)}>Posters</a>
          <a href="#Registration" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(registration)}>Registration</a>
          <a href="#Speakers" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(speakersRef)}>Speakers</a>
          <a href="#ConferenceSchedule" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(schedule)}>Programme</a>
          <a href="#Commite" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(commiteRef)}>Committee</a>
        </nav>
      </header>

      <div className="flex flex-col items-center mt-8 space-y-4">
        <img
          src={imagem}
          alt="Imagem representativa da conferência"
          className="h-56 object-contain"
        />
        <a href="https://forms.gle/UibDKTz8EYf1eD7j9">
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-[#46BDCD] transition">
            Register
          </button>
        </a>
      </div>

      <div className="mt-8 px-8 md:px-16" ref={aboutRef}>
        <h1 className="text-3xl font-inter font-bold text-customColor text-center">About The Meeting</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
        <p className="mt-6 text-left text-base">
        Fundamental Aspects of DNA Repair and Mutagenesis (FARM-DNA) is an international conference in the area of DNA repair, mutagenesis and genomic stability. This will be the 7th edition in a series of conferences organized on DNA Repair and Mutagenesis, that are focused on rare human diseases, that take place in Brazil every four to five years, since 1999. All previous conferences have attracted eminent experts from different parts of the world and have been a great scientific success. The aim of the conference is to present and discuss the results of the latest research on all relevant aspects of DNA repair and mutagenesis, including mechanisms related to several human rare syndromes, that also impact the whole population. The conference will provide an excellent opportunity to present the latest research on DNA repair and mutagenesis and bring together a diverse group of leading scientists from around the world. 
        </p>
        <p className="mt-4 text-left text-base">
        We look forward to welcoming you to São Paulo in November!
        </p>
      </div>

      <div className="mt-8 px-8 md:px-16" ref={abstractRef}>
        <h1 className="text-3xl font-inter font-bold text-customColor text-center">Abstract Information</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
        <p className="mt-6 text-left text-base">
          Please submit your abstracts directly in the registration form, which can be accessed by clicking the <strong>"Register"</strong> button at the top of the page.
        </p>
        <p className="mt-4 text-left text-base">
          Abstracts should be written in English and contain a title, full author names, author affiliations, and a main text (limited to 3000 characters). Please paste the relevant text directly in the appropriate sections of the registration form, following the examples provided in the form. There will be no option for uploading any files.
        </p>
        <p className="mt-4 text-left text-base">
          Abstract submission automatically implies that you are expected to present a poster (more info on poster presentation in the relevant section).
        </p>
        <p className="mt-4 text-left text-base">
          A small number of abstracts will be selected for oral presentations. Selected oral presentations will be 15 minutes long, and selected speakers will be automatically removed from the poster session. To be considered for an oral presentation, please register by the Early Registration deadline (31/07/25) and indicate your interest in the registration form.
        </p>
      </div>

      <div className="mt-8 px-8 md:px-16" ref={posterInformation}>
          <h1 className="text-3xl font-inter font-bold text-customColor text-center">Poster information</h1>
          <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
            <p className="mt-4 text-left text-base">Posters should be prepared in English and illustrate your research results in a clear and concise manner.</p>
            <p className="mt-4 text-left text-base">Posters should be no bigger than 90cm x 120cm.</p>
            <p className="mt-4 text-left text-base">You will be able to display your poster at your designated poster board throughout the whole meeting, and we encourage you to present your poster to other participants during lunch and/or coffee breaks, as well as during the allocated poster session on Sunday evening.</p>
      </div>

      <div className="mt-8 px-8 md:px-16"  ref={registration}>
          <h1 className="text-3xl font-inter font-bold text-customColor text-center">Registration</h1>
          <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
          <div className="space-y-6 text-lg leading-relaxed">
          <p className="mt-4 text-left text-base">
            Please register using the following link{" "}
            <a href="https://forms.gle/UibDKTz8EYf1eD7j9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              (here)
            </a>.
          </p>
            <p className="mt-4 text-left text-base">
              Registration fees for Brazilian attendees are displayed in Reais (R$) and are based on career stage and on membership to Mutagen-Brasil. Registration fees for international attendees are based solely on career stage and are displayed in US dollars (US$):
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Early Registrations (until 31/07/2025):</h3>
              <div className="overflow-auto">
                <table className="min-w-full border border-gray-300 text-sm md:text-base">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-4 py-2 ">Category</th>
                      <th className="border px-4 py-2 ">Member of Mutagen-Brasil</th>
                      <th className="border px-4 py-2 ">Non-member</th>
                      <th className="border px-4 py-2 ">International Attendees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Professional</td>
                      <td className="border px-4 py-2">R$ 400</td>
                      <td className="border px-4 py-2">R$ 800</td>
                      <td className="border px-4 py-2">US$ 250</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Postdoctoral Fellow</td>
                      <td className="border px-4 py-2">R$ 300</td>
                      <td className="border px-4 py-2">R$ 600</td>
                      <td className="border px-4 py-2">US$ 200</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Postgraduate Student</td>
                      <td className="border px-4 py-2">R$ 200</td>
                      <td className="border px-4 py-2">R$ 400</td>
                      <td className="border px-4 py-2">US$ 150</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Undergraduate Student</td>
                      <td className="border px-4 py-2">R$ 100</td>
                      <td className="border px-4 py-2">R$ 200</td>
                      <td className="border px-4 py-2">US$ 100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Late Registrations (01/08/2025 to 31/10/25):</h3>
              <div className="overflow-auto">
                <table className="min-w-full border border-gray-300 text-sm md:text-base">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-4 py-2 ">Category</th>
                      <th className="border px-4 py-2 ">Member of Mutagen-Brasil</th>
                      <th className="border px-4 py-2 ">Non-member</th>
                      <th className="border px-4 py-2 ">International Attendees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Professional</td>
                      <td className="border px-4 py-2">R$ 500</td>
                      <td className="border px-4 py-2">R$ 900</td>
                      <td className="border px-4 py-2">US$ 300</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Postdoctoral Fellow</td>
                      <td className="border px-4 py-2">R$ 400</td>
                      <td className="border px-4 py-2">R$ 700</td>
                      <td className="border px-4 py-2">US$ 250</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Postgraduate Student</td>
                      <td className="border px-4 py-2">R$ 300</td>
                      <td className="border px-4 py-2">R$ 500</td>
                      <td className="border px-4 py-2">US$ 200</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Undergraduate Student</td>
                      <td className="border px-4 py-2">R$ 150</td>
                      <td className="border px-4 py-2">R$ 250</td>
                      <td className="border px-4 py-2">US$ 150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-8 mb-2">Payment Information:</h3>
              <p>For Brazilian attendees, please pay the relevant registration fees to Mutagen-Brasil:</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Via PIX: CNPJ 00.133.032/0001-65</li>
                <li>Or by bank transfer: Banco do Brasil | Ag: 3312-X | c/c: 22685-8</li>
              </ul>
              <p className="mt-4">For international attendees, please contact the organization (<a href="mailto:nicolas@iq.usp.br" className="text-blue-600 underline">nicolas@iq.usp.br</a>) for payment instructions.</p>
            </div>
          </div>
      </div>


      <div className="mt-12 px-8 md:px-16" ref={speakersRef}>
      <h1 className="text-3xl font-inter font-bold text-customColor text-center">Invited Speakers</h1>
      <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
      <div className="grid grid-cols-1 min400:grid-cols-2 gap-4 w-full md:w-10/12 mx-auto p-4 text-base">
        {/* Coluna 1 */}
        <div className="bg-gray-100 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Abby Green</h3>
              <p>(Washington Univ. St. Louis, USA)</p>
            </div>
            <div>
              <h3 className="font-semibold">Alain Sarasin</h3>
              <p>(Gustave Roussy Institute, France)</p>
            </div>
            <div>
              <h3 className="font-semibold">André Nussenzweig</h3>
              <p>(NIH, USA)</p>
            </div>
            <div>
              <h3 className="font-semibold">Andrés Aguilera</h3>
              <p>(Univ. Seville, Spain)</p>
            </div>
            <div>
              <h3 className="font-semibold">Anna Campalans</h3>
              <p>(CEA, France)</p>
            </div>
            <div>
              <h3 className="font-semibold">Annabel Quinet</h3>
              <p>(INSERM, France)</p>
            </div>
            <div>
              <h3 className="font-semibold">Carlos Renato Machado</h3>
              <p>(UFMG, Brazil)</p>
            </div>
            <div>
              <h3 className="font-semibold">Carlos Robello</h3>
              <p>(Institute Pasteur, Uruguay)</p>
            </div>
            <div>
              <h3 className="font-semibold">David Wilson</h3>
              <p>(Hasselt Univ., Belgium)</p>
            </div>
            <div>
              <h3 className="font-semibold">Evi Soutoglou</h3>
              <p>(Univ. Sussex, UK)</p>
            </div>
            <div>
              <h3 className="font-semibold">Francisco Bastos de Oliveira</h3>
              <p>(UFRJ, Brazil)</p>
            </div>
            <div>
              <h3 className="font-semibold">Gianluca Tell</h3>
              <p>(Univ. Udine, Italy)</p>
            </div>
            <div>
              <h3 className="font-semibold">Hannes Lans</h3>
              <p>(Erasmus MC, Netherlands)</p>
            </div>
            <div>
              <h3 className="font-semibold">Jan Hoeijmakers</h3>
              <p>(Erasmus MC, Netherlands)</p>
            </div>
            <div>
              <h3 className="font-semibold">Jenifer Saffi</h3>
              <p>(UFCSPA, Brazil)</p>
            </div>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="bg-gray-100 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">José Renato Cussiol</h3>
              <p>(UNIFESP, Brazil)</p>
            </div>
            <div>
              <h3 className="font-semibold">Keith Caldecott</h3>
              <p>(Univ. Sussex, UK)</p>
            </div>
            <div>
              <h3 className="font-semibold">Leonardo Karam Teixeira</h3>
              <p>(INCA, Brazil)</p>
            </div>
            <div>
              <h3 className="font-semibold">Luís Batista</h3>
              <p>(Washington Univ. St. Louis, USA)</p>
            </div>
            <div>
              <h3 className="font-semibold">Marcelo Santos da Silva</h3>
              <p>(USP, Brazil)</p>
            </div>
            <div>
              <h3 className="font-semibold">Maria Carolina Elias Sabbaga</h3>
              <p>(Butantan Institute, Brazil)</p>
            </div>
            <div>
              <h3 className="font-semibold">Manuel Muñoz</h3>
              <p>(Univ. Buenos Aires, Argentina)</p>
            </div>
            <div>
              <h3 className="font-semibold">Marcus Smolka</h3>
              <p>(Cornell Univ., USA)</p>
            </div>
            <div>
              <h3 className="font-semibold">Patricia Kannouche</h3>
              <p>(Gustave Roussy Institute, France)</p>
            </div>
            <div>
              <h3 className="font-semibold">Patricia Opresko</h3>
              <p>(Univ. Pittsburgh, USA)</p>
            </div>
            <div>
              <h3 className="font-semibold">Pablo Radicella</h3>
              <p>(CEA, France)</p>
            </div>
            <div>
              <h3 className="font-semibold">Richard McCulloch</h3>
              <p>(Univ. Glasgow, Scotland)</p>
            </div>
            <div>
              <h3 className="font-semibold">Stephen West</h3>
              <p>(Francis Crick Institute, UK)</p>
            </div>
            <div>
              <h3 className="font-semibold">Vanesa Gottifredi</h3>
              <p>(Institute Leloir, Argentina)</p>
            </div>
            <div>
              <h3 className="font-semibold">Vilhelm Bohr</h3>
              <p>(Univ. Copenhagen, Denmark)</p>
            </div>

          </div>
        </div>
      </div>
    </div>

      <div className="mt-12 px-8 md:px-16">
              
      <div className="w-full mx-auto">
      <h1 className="text-3xl font-inter font-bold text-customColor text-center">Preliminary Programme</h1>
      <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
      
      {/* Day selection tabs */}
      <div className="flex flex-wrap justify-center mb-6 gap-2 sm:gap-0" ref={schedule}>
        <button
          className={`py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base font-medium transition-all duration-300 transform ${
            activeDay === 'day1' ? 'bg-teal-800 scale-105 shadow-lg' : 'bg-teal-400 hover:bg-teal-500'
          } text-white rounded-l-md`}
          onClick={() => handleDayChange('day1')}
        >
          November 1st
        </button>
        <button
          className={`py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base font-medium transition-all duration-300 transform ${
            activeDay === 'day2' ? 'bg-teal-800 scale-105 shadow-lg' : 'bg-teal-400 hover:bg-teal-500'
          } text-white`}
          onClick={() => handleDayChange('day2')}
        >
          November 2nd
        </button>
        <button
          className={`py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base font-medium transition-all duration-300 transform ${
            activeDay === 'day3' ? 'bg-teal-800 scale-105 shadow-lg' : 'bg-teal-400 hover:bg-teal-500'
          } text-white rounded-r-md`}
          onClick={() => handleDayChange('day3')}
        >
          November 3rd
        </button>
      </div>
      
      
      {/* Schedule Content with Animation */}
      <div className="relative">
        {/* Previous Content (Animating Out) */}
        {animating && prevActiveDay && (
          <div 
            className="absolute w-full opacity-0 transition-all duration-300" 
            style={{ 
              opacity: animating ? 0 : 1, 
              transform: `translateX(${activeDay > prevActiveDay ? '-100px' : '100px'})`,
              zIndex: 1
            }}
          >
            <div className="space-y-4 mb-8">
              {daySchedules[prevActiveDay].map((item, index) => (
                <ScheduleItem key={`prev-${index}`} item={item} />
              ))}
            </div>
          </div>
          
        )}
        
        {/* Current Content (Animating In) */}
        <div 
          className="transition-all duration-500" 
          style={{ 
            opacity: animating ? 0 : 1, 
            transform: animating ? `translateX(${activeDay > prevActiveDay ? '100px' : '-100px'})` : 'translateX(0)'
          }}
        >
          <div className="space-y-4 mb-8">
            {daySchedules[activeDay].map((item, index) => (
              <ScheduleItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
      <div className="mt-12" ref={commiteRef}>
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
      </div>
      <footer className="footer mt-12 mx-auto">
        <div className="footer-content flex justify-center">
          <img src={logofooter} alt="Logo do rodapé da conferência" className="w-40 h-40" />
        </div>
        <div className="footer-text text-center text-base text-gray-600 mt-6">
        </div>
      </footer>
    </div>
    
  );
};

const ScheduleItem = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <div className="flex">
        <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {item.time}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-3 mt-2 shadow-sm text-left">
        <div className="font-medium text-gray-900 text-left">{item.title}</div>
        {item.description && (
          <div className="text-sm text-gray-600 text-left">
            {item.description}
          </div>
        )}
        {item.isComplex && item.content}
      </div>
    </div>
  );
};

export default App;
