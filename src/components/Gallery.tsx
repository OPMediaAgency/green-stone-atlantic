import React from "react";

const galleryItems = [
  {
    src: "/images/img1.jpeg",
    alt: "Professional landscaping projects and free estimate services in Halifax by Green Stone Atlantic ",
    caption: "Atlantic Coastal View",
  },
  {
    src: "/images/img2.jpeg",
    alt: "Expert lawn mowing garden cleanup and landscaping services in Halifax NS ",
    caption: "Shoreline Horizon",
  },
  {
    src: "/images/img7.jpeg",
    alt: "Green Stone Atlantic landscaping company serving Halifax Dartmouth and Bedford ",
    caption: "Sunset Serenity",
  },
  {
    src: "/images/img4.jpeg",
    alt: "Residential and commercial landscaping contractor in Halifax Regional Municipality ",
    caption: "Cliffside Motion",
  },
  {
    src: "/images/img5.jpeg",
    alt: "Professional landscaping projects and free estimate services in Halifax by Green Stone Atlantic ",
    caption: "Stone Detail",
  },
  {
    src: "/images/img6.jpeg",
    alt: "Expert lawn mowing garden cleanup and landscaping services in Halifax NS ",
    caption: "Open Water",
  },
   {
    src: "/images/img7.jpeg",
    alt: "Green Stone Atlantic landscaping company serving Halifax Dartmouth and Bedford ",
    caption: "Sunset Serenity",

  },
   {
    src: "/images/img8.jpeg",
    alt: "Residential and commercial landscaping contractor in Halifax Regional Municipality  ",
    caption: "Open Water",
  },
   {
    src: "/images/img9.jpeg",
    alt: "Expert lawn mowing garden cleanup and landscaping services in Halifax NS ",
    caption: "Open Water",
  },
   
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Discover our Atlantic-inspired collection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore moments captured along the coastline, from rugged cliffs to peaceful sunsets.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm transition duration-300 overflow-hidden group hover:shadow-md"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-[600px] w-full object-center group-hover:scale-105 transition-transform duration-300"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
