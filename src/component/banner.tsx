import Hero from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="flex flex-col mt-10 lg:flex-row justify-between  container mx-auto px-8 lg:pl-9 gap-8 lg:gap-0 ">
      {" "}
      {/* Left Content */}{" "}
      <div className="mt-5 lg:w-auto">
        {" "}
        {/* Heading */}{" "}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          {" "}
          Build Your Ideal <br />{" "}
          <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Development Stack{" "}
          </span>{" "}
        </h1>{" "}
        {/* Description */}{" "}
        <p className="my-6 max-w-lg text-[#475569]">
          {" "}
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your{" "}
          <br className="hidden sm:block" /> next project.{" "}
        </p>{" "}
        {/* Mobile Image */}{" "}
        <div className="lg:hidden w-full flex justify-center my-8">
          {" "}
          <img
            src={Hero}
            alt="Development Stack"
            className="w-full max-w-sm h-auto"
          />{" "}
        </div>{" "}
        {/* Buttons */}{" "}
        <div className="flex flex-col sm:flex-row gap-4 text-[18px] mt-10">
          {" "}
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl">
            {" "}
            Explore Technologies{" "}
          </button>{" "}
          <button className="text-[#374151] border-2 border-gray-200 px-10 py-2 rounded-xl">
            {" "}
            Learn More{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Desktop Image */}{" "}
      <div className="hidden lg:block max-w-2xl -mt-18">
        {" "}
        <img
          src={Hero}
          alt="Development Stack"
          className="w-full h-auto"
        />{" "}
      </div>{" "}
    </div>
  );
};
export default Banner;
