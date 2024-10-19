export const Navbar = () => {
  return (
    <header className="fixed top-[30px] left-0 right-0 z-50 ">
      <div className=" container navbar w-full flex justify-between items-center">
        <div className="logo">
          <img src="/vite.svg" alt="" />
          <p>Nidejia</p>
        </div>
        <div className=" flex items-center gap-[30px]">
          <a href="#" className=" text-white font-semibold">
            Featured
          </a>
          <a href="#" className=" text-white font-semibold">
            Categories
          </a>
          <a href="#" className=" text-white font-semibold">
            Testimonials
          </a>
          <a href="#" className=" text-white font-semibold">
            About
          </a>
        </div>

        <div className=" flex items-center gap-3">
          <a href="#" className="btn-second">
            Sign In
          </a>
          <a href="#" className="btn-primary">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};
