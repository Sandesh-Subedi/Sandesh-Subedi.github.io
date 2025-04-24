// import React from 'react';
// import farMart from "../assets/portfolio/FarMart.png";
// import TBF from "../assets/portfolio/TBF.jpg";
// import calculator from "../assets/portfolio/calculator.jpg";
// import ckWebapp from "../assets/portfolio/ck.png";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: TBF,
//       name: 'FarMart Sales Management System',
//       codeLink: 'https://github.com/Sandesh-Subedi/FarMarT-Sales-Management-System'
//     },
//     {
//       id: 2,
//       src: farMart,
//       name: 'Farmart Online Grocery Store',
//       codeLink: 'https://github.com/Sandesh-Subedi/Farmart-Online-Grocery-Store'
//     },
//     {
//       id: 3,
//       src: ckWebapp,
//       name: 'Cattle Kettle Web App',
//       codeLink: 'https://cattlekettle.org/'
//     },
//     {
//       id: 4,
//       src: calculator,
//       name: 'Java-based Math Calculator',
//       codeLink: 'https://github.com/Sandesh-Subedi/Math-Calculator'
//     }
//   ];

//   return (
//     <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-6 text">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
//           <p className="py-6">Some of my featured projects</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src, name, codeLink }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img src={src} alt={name} className="w-80 h-52 object-cover rounded-md duration-200 hover:scale-105" />
//               <p className="text-center mt-2">{name}</p>
//               <div className="flex items-center justify-center">
//                 <button
//                   onClick={() => window.open(codeLink, '_blank')}
//                   className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
//                 >
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from 'react';
import farMart from "../assets/portfolio/FarMart.png";
import TBF from "../assets/portfolio/TBF.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import ckWebapp from "../assets/portfolio/ckettle.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TBF,
      name: "FarMart Sales Management System",
      codeLink: "https://github.com/Sandesh-Subedi/FarMarT-Sales-Management-System",
    },
    {
      id: 2,
      src: farMart,
      name: "Farmart Online Grocery Store",
      codeLink: "https://github.com/Sandesh-Subedi/Farmart-Online-Grocery-Store",
    },
    {
      id: 3,
      src: ckWebapp,
      name: "Cattle Kettle Web App",
      codeLink: "https://cattlekettle.org/",
      isWebsite: true,
    },
    {
      id: 4,
      src: calculator,
      name: "Java-based Math Calculator",
      codeLink: "https://github.com/Sandesh-Subedi/Math-Calculator",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight border-b-4 border-gray-600 inline-block">
            Portfolio
          </h2>
          <p className="text-gray-300 mt-4 text-lg">Showcasing my featured projects</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolios.map(({ id, src, name, codeLink, isWebsite }) => (
            <div
              key={id}
              className="bg-[#1e293b] p-5 rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative w-full h-56">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Project Name */}
              <h3 className="text-lg font-semibold mt-4 text-center">{name}</h3>

              {/* Button */}
              <div className="mt-4 flex justify-center">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 w-full text-md font-medium rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all text-center shadow-md"
                >
                  {isWebsite ? "View Website" : "View Code"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
