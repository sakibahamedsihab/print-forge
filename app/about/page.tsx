import Image from "next/image";
// Replace with the actual path to your uploaded image
import aboutImage from "@/public/hero-2.png";

export default function AboutSection() {
  return (
    <div className="w-full bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Top Section: About PrintForge */}
        <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 relative aspect-square">
            <Image
              src={aboutImage}
              alt="Assortment of 3D printed models including statues, gears, and geometric shapes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-sm"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              About PrintForge
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Empowering <br /> makers worldwide
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 2023, PrintForge has quickly become the go-to
                platform for 3D printing enthusiasts, makers, and professional
                designers to share and discover amazing STL files for 3D
                printing.
              </p>
              <p>
                Our mission is to foster a vibrant community where creativity
                meets technology, enabling anyone to bring their ideas to life
                through 3D printing.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Middle Section: Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Feature 1 */}
          <div className="flex flex-col items-start pt-6 md:pt-0 md:pr-8">
            <div className="flex items-center gap-3 mb-3">
              <svg
                xmlns="http://www.w3.org/-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 12 12 17 22 12"></polyline>
                <polyline points="2 17 12 22 22 17"></polyline>
              </svg>
              <h3 className="text-xl font-bold">100K+ Models</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start pt-6 md:pt-0 md:px-8">
            <div className="flex items-center gap-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <h3 className="text-xl font-bold">Active Community</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              <h3 className="text-xl font-bold">Free to Use</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Most models are free to download, with optional premium features
              for power users.
            </p>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Bottom Section: Our Vision */}
        <section className="max-w-3xl mx-auto flex flex-col items-start">
          <h2 className="text-4xl font-extrabold mb-8">Our vision</h2>
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              At PrintForge, we believe that 3D printing is revolutionizing the
              way we create, prototype, and manufacture. Our platform serves as
              a bridge between designers and makers, enabling the sharing of
              knowledge and creativity that pushes the boundaries of what's
              possible with 3D printing.
            </p>

            {/* Small centered divider line */}
            <div className="flex justify-center w-full my-8">
              <div className="w-24 h-px bg-gray-300"></div>
            </div>

            <p>
              Whether you're a hobbyist looking for your next weekend project,
              an educator seeking teaching materials, or a professional designer
              wanting to share your creations, PrintForge provides the tools and
              community to support your journey in 3D printing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
