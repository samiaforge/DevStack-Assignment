
import type { Itechnologies } from "../../types/technologies";
import { FaStar } from "react-icons/fa";

interface TechnologiesAvailableProps {
  technologies: Itechnologies[];
  yourStack: Itechnologies[];
  onAddToStack: (technology: Itechnologies) => void;
}


const TechnologiesAvailable = ({ technologies, yourStack,onAddToStack, }:TechnologiesAvailableProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
      {technologies.map((technology:Itechnologies) => {
        const isAdded = yourStack.some(
          (item) => item.id === technology.id
        );

        return (
          <div key={technology.id}className="card bg-base-100 shadow-sm">
            <div className="flex justify-between p-6">
                 <figure>
              <img className="w-10 h-10"
                src={technology.icon}
                alt={technology.name}
              />
              
            </figure>
            <p className="text-[#0EA5E9] font-bold bg-blue-50 border rounded-3xl px-4 py-1">{technology.badge}</p>
            </div>
           
            <div className="card-body">
              <h2 className="card-title text-2xl">{technology.name}</h2>
              <p className="text-[#64748B]">
                {technology.description}
              </p>

              <div className="grid grid-cols-3 items-center gap-2 mt-2 text-[#64748B]">
                <p className="bg-slate-50 py-1 rounded-md text-sm font-medium">{technology.category}</p>
                <p className="text-sm text-center">{technology.difficulty}</p>
                
                <p className="flex items-center justify-end gap-1 text-sm"><FaStar className="text-yellow-400"/>{technology.rating}</p>
              </div>
               {/* Add Button */}
              <div className="card-actions mt-4">

                <button
                  onClick={() => onAddToStack(technology)}
                  disabled={isAdded}
                  className={`btn w-full ${
                    isAdded
                      ? "bg-gray-100 text-pink-500 border-pink-500"
                      : "btn-primary"
                  }`}
                >
                  {isAdded
                    ? "✓ Added to Stack"
                    : "Add to Stack"}
                </button>

              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};


export default TechnologiesAvailable;
