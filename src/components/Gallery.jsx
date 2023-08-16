import React from "react";
import { gallery } from "../data";

export default function Gallery() {
  return (
    <section id="gallery" className="text-green-400 body-font">
      <div className="px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Gallery
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div key={item.image} className="p-4">
              <div className="rounded overflow-hidden shadow-lg">
                <img
                  className="object-cover w-full h-64 sm:h-56"
                  src={item.image}
                  alt={item.title}
                />
                <div className="p-4">
                  <h2 className="text-sm font-medium text-green-400 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="text-lg font-medium text-green-200">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

