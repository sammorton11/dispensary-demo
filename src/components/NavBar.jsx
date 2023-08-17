import React from "react";

export default function NavBar() {
    return (
        <header style={{backgroundColor: '#242424'}}>
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/" className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="/" className="ml-3 text-xl">
                GreenLeaf Grove
              </a>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#gallery" className="mr-5 text-green-200">
                Gallery
              </a>
              <a href="https://weedmaps.com/dispensaries/capital-dank-edmond" className="mr-5 text-green-200" target="_blank" rel="noopener noreferrer">
                Weedmaps
              </a>
            </nav>
            <div className='text-green-100 text-xl px-20'>CALL-NOW: 405-234-1234</div>
            <a
              href="#contact"
              className="text-green-200 inline-flex items-center bg-gray-700 border-0 p-3 px-10 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" target="_blank" rel="noopener noreferrer">
               CONTACT
            </a>
          </div>
        </header>
    );
}
