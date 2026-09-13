import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white p-4">
      <div className="container mx-auto px-4 lg:px-10 py-4 flex justify-between items-center">
        <img src={Logo} alt="" />

        <ul className="hidden lg:flex gap-10 items-center text-[#475569] text-[18px] font-medium">
          <li className="text-[#DB2777]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
       <div className="hidden lg:flex items-center">
          <button className="btn btn-ghost text-[18px] text-[#334155]">
            Sign in
          </button>

          <button className="btn btn-secondary rounded-full text-[18px]">
            Sign up
          </button>
        </div>

      
        <button className="lg:hidden btn btn-ghost text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Nav;
