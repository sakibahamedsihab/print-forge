import Image from "next/image";
// Replace the path below with the actual path to your image file
import heroLogo from "@/public/hero.png";

export default function Banner() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full mx-auto px-6 py-16 lg:px-20 bg-white">
      {/* Left Column: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Your go-to platform for 3D printing files
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          Discover what’s <br className="hidden lg:block" />
          possible with 3D <br className="hidden lg:block" />
          printing
        </h1>

        <p className="text-lg text-gray-600 max-w-md leading-relaxed">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>

        <button className="mt-4 px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300">
          Browse Models
        </button>
      </div>

      {/* Right Column: Hero Graphic */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end relative">
        {/* The container needs relative positioning and an aspect ratio when using the 'fill' prop on Next/Image */}
        <div className="relative w-full max-w-lg aspect-square">
          <Image
            src={heroLogo}
            alt="Collection of 3D printed models including statues and geometric shapes"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
