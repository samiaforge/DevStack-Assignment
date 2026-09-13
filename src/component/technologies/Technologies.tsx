import { use, useState } from "react";

import type { Itechnologies } from "../../types/technologies";

import TechnologiesAvailable from "./TechnologiesAvailable";
import YourStack from "./YourStack";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [yourStack, setYourStack] = useState<Itechnologies[]>([]);


  // Add technology
  const handleAddToStack = (technology: Itechnologies) => {
  const alreadyExists = yourStack.some(
    (item) => item.id === technology.id
  );

  if (alreadyExists) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setYourStack((previousStack) => [
    ...previousStack,
    technology,
  ]);

  toast.success("1 item selected");
};

  // Remove one technology
const handleRemoveFromStack = (id: string) => {
  setYourStack((previousStack) =>
    previousStack.filter(
      (technology) => technology.id !== id
    )
  );

  toast.info("1 item removed");
};
  // Remove all technologies
 const handleRemoveAll = () => {
  setYourStack([]);
  toast.success("All items removed");
};

  return (
    <div className="container mx-auto px-10">

      {/* Heading */}
      <div className="mt-12">
        <h2 className="text-4xl font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-[#64748B] mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

        {/* Technologies */}
        <div className="lg:col-span-2 min-w-0">
          <TechnologiesAvailable
            technologies={technologies}
            yourStack={yourStack}
            onAddToStack={handleAddToStack}
          />
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1 min-w-0">
          <YourStack
            technologies={yourStack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>

      </div>

   <ToastContainer position="bottom-right" autoClose={2000} />

    </div>
  );
};

export default Technologies;