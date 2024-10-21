export const Category = () => {
  return (
    <div className=" py-[50px] bg-black-panel mt-[100px]">
      <div className=" container">
        <div className=" flex items-center justify-between">
          <div>
            <h1 className=" text-text-primary text-[28px] font-bold">
              Categories
            </h1>
            <p className=" text-text-secondary text-lg">
              We provide everything
            </p>
          </div>
          <a href="#" className=" btn-primary">
            Explore All
          </a>
        </div>

        <div className=" mt-[30px] grid grid-cols-4 gap-[30px]">
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_hills.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">
                Star Hills
              </p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_buildings.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">
                Apartment
              </p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_city.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">
                Nearby City
              </p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_city2.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">
                Landed House
              </p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_airplane.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">Airport</p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_award.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">Awards</p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_sunset.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">Sunset</p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
          <div className=" flex items-center gap-4 py-[16px] px-[20px] rounded-[20px] bg-black-button">
            <img src="/images/ic_other.svg" alt="" />
            <div>
              <p className="text-text-primary font-bold text-[20px]">Others</p>
              <p className="text-text-secondary text-lg">18,394</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
