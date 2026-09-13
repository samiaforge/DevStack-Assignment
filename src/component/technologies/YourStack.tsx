import type { Itechnologies } from "../../types/technologies";

interface YourStackProps {
  technologies: Itechnologies[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  technologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm mt-2">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-2xl font-bold">
            Your Stack
          </h2>

          <p className="text-sm text-[#64748B] mt-1">
            {technologies.length === 0
    ? "No technologies selected yet."
    : `${technologies.length} ${
        technologies.length === 1
          ? "Technology"
          : "Technologies"
      } Selected`}
          </p>
        </div>

        {/* Remove All */}
        {technologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}

      </div>

      {/* Empty State */}
      {technologies.length === 0 ? (

        <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">

          <p className="text-[#64748B]">
             Your stack is empty
          </p>

        </div>

      ) : (

        /* Selected Technologies - 1 Column */
        <div className="flex flex-col gap-3">

          {technologies.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
            >

              {/* Icon + Name + Category */}
              <div className="flex items-center gap-3">

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h3 className="font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-[#64748B]">
                    {technology.category}
                  </p>
                </div>

              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-gray-400 hover:text-red-500 text-xl font-bold"
                aria-label={`Remove ${technology.name}`}
              >
                ✕
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default YourStack;