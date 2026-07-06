import { ModelCardProps } from "@/app/types";
import Link from "next/link";

export default function ModelCard({ model }: ModelCardProps) {
  return (
    // 1. Made the Link a block element taking full height
    <Link href={`/3d-models/${model.id}`} className="block h-full">
      {/* 2. Added 'h-full' to the main card container and changed 'w-75' to 'w-full' to fill the parent grid/flex column */}
      <div className="w-full h-full bg-[#d1d1d1] rounded border flex flex-col border-gray-300 overflow-hidden font-sans shadow-sm">
        {/* Image Section */}
        {/* Note: 'h-75' isn't a standard Tailwind class by default. I changed it to 'h-64' (16rem), but use 'h-[300px]' if you need a custom exact size */}
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-64 object-cover bg-gray-400"
        />

        {/* Content Section */}
        {/* 3. Added 'grow' here so the content area stretches to fill the rest of the card's height */}
        <div className="p-5 flex flex-col grow">
          <h2 className="text-xl font-bold text-gray-700">{model.name}</h2>

          {/* 4. This 'grow' pushes the tags and likes to the bottom */}
          <p className="text-gray-600 text-sm mt-4 leading-relaxed grow">
            {model.description}
          </p>

          <div className="mt-4">
            <span className="inline-block border border-gray-500 rounded-full px-3 py-1 text-sm text-gray-600">
              {model.category}
            </span>
          </div>

          {/* Added 'flex' here just to ensure items align nicely if needed */}
          <div className="mt-4 flex items-center gap-1.5 text-gray-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-lg">{model.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
