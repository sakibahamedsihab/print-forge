import { getModelById } from "@/app/lib/models";

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model = await getModelById(id);

  // Fallback UI in case a model isn't found for the given ID
  if (!model) {
    return (
      <main className="max-w-5xl mx-auto p-8 text-center text-gray-500 text-xl">
        Model not found.
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6 mt-10 font-sans">
      {/* Flex container: stacks vertically on mobile, row on medium screens and up */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 shrink-0">
          <img
            src={model.image}
            alt={model.name}
            className="w-full aspect-square object-cover"
          />
        </div>

        {/* Right Side: Content Details */}
        <div className="w-full md:w-1/2 flex flex-col pt-2">
          {/* Likes */}
          <div className="flex items-center gap-1.5 text-gray-500 mb-3">
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

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            {model.name}
          </h1>

          {/* Tags / Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-600">
              {model.category}
            </span>
            {/* If your model data has an array of tags, you can map them here. 
                Using a hardcoded one to match your screenshot's dual-badge look for now. */}
            <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-600">
              Upgrade
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed mb-10">
            {model.description}
          </p>

          {/* Date Added */}
          <div className="text-xs text-gray-500 mt-auto">
            {/* Assuming your model data has a date string. Adjust the property name as needed. */}
            Added on {model.dateAdded || "9/14/2024"}
          </div>
        </div>
      </div>
    </main>
  );
}
