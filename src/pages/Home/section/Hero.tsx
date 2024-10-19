export const Hero = () => {
  return (
    <section className="relative h-screen ">
      <img
        src="/images/hero-bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-black/75 to-black/100 z-10"></div>
      <div className="relative z-20 text-white p-8 container top-[226px]">
        <h1 className="text-[55px] font-bold lin">
          Find Glorious Living <br /> And Loving Space
        </h1>
        <p className="mt-4 text-lg leading-8">
          Dolor house comfortable si amet with cheap <br /> price that also
          lorem when you need grow.
        </p>

        <div className="flex items-center bg-black-panel  rounded-full shadow-lg  mt-[50px] max-w-[555px]">
          <input
            type="text"
            placeholder="Search by city or country..."
            className="flex-grow px-[40px] py-[20px] text-lg bg-black-panel text-text-secondary placeholder-text-secondary focus:outline-none"
          />

          <button className="bg-accent text-black  px-[40px] py-[20px] font-semibold text-lg rounded-r-full hover:bg-orange-600 transition">
            Explore
          </button>
        </div>
      </div>

      {/* Panel */}
      <div className="flex justify-between items-center absolute bottom-0 z-10 container left-1/2 translate-y-1/2 -translate-x-1/2 px-[50px] py-[24px] h-[128px] rounded-[20px] bg-black-panel">
        <div className=" flex items-center gap-4">
          <div className=" bg-accent p-5 rounded-full">
            <img src="/images/ic_available.svg" alt="" />
          </div>
          <div>
            <p className=" text-white text-[28px] font-bold">382M</p>
            <p className=" text-text-secondary">Kos Available</p>
          </div>
        </div>
        <div className="border-l border-gray-600 h-16"></div>

        <div className=" flex items-center gap-4">
          <div className=" bg-accent p-5 rounded-full">
            <img src="/images/ic_people.svg" alt="" />
          </div>
          <div>
            <p className=" text-white text-[28px] font-bold">9/10</p>
            <p className=" text-text-secondary">People Happy</p>
          </div>
        </div>
        <div className="border-l border-gray-600 h-16"></div>

        <div className=" flex items-center gap-4">
          <div className=" bg-accent p-5 rounded-full">
            <img src="/images/ic_security.svg" alt="" />
          </div>
          <div>
            <p className=" text-white text-[28px] font-bold">100%</p>
            <p className=" text-text-secondary">High Security</p>
          </div>
        </div>
        <div className="border-l border-gray-600 h-16"></div>

        <div className=" flex items-center gap-4">
          <div className=" bg-accent p-5 rounded-full">
            <img src="/images/ic_country.svg" alt="" />
          </div>
          <div>
            <p className=" text-white text-[28px] font-bold">183</p>
            <p className=" text-text-secondary">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};
