export const Footer = () => {
  return (
    <div className=" mt-[100px] bg-black-panel py-[100px]">
      <div className="container">
        <div className=" grid grid-cols-5">
          <div className=" col-span-1">
            <h2 className=" font-semibold text-text-primary">Solutions</h2>
            <ul className=" flex flex-col gap-3 mt-3">
              <li>
                <a href="#" className=" text-text-secondary">
                  Credit Rewards
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  P2P Renting
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Open for Listing
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  APIs Developer
                </a>
              </li>
            </ul>
          </div>

          <div className=" col-span-1">
            <h2 className=" font-semibold text-text-primary">Product</h2>
            <ul className=" flex flex-col gap-3 mt-3">
              <li>
                <a href="#" className=" text-text-secondary">
                  Featured House
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Special Awards
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Made-In Bandung
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Exclusive Style
                </a>
              </li>
            </ul>
          </div>

          <div className=" col-span-1">
            <h2 className=" font-semibold text-text-primary">Company</h2>
            <ul className=" flex flex-col gap-3 mt-3">
              <li>
                <a href="#" className=" text-text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Our Investors
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Missions 2024
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className=" text-text-secondary">
                  Media Press
                </a>
              </li>
            </ul>
          </div>

          <div className=" col-span-2">
            <h2 className=" font-semibold text-text-primary">
              Subscribe & Free Rewards
            </h2>
            <div className=" bg-white  rounded-full mt-3 flex items-center gap-2 pl-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  fill="#1A143C"
                />
                <path
                  d="M12 12.87C11.16 12.87 10.31 12.61 9.66003 12.08L6.53002 9.57997C6.21002 9.31997 6.15003 8.84997 6.41003 8.52997C6.67003 8.20997 7.14003 8.14997 7.46003 8.40997L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.40997C16.85 8.14997 17.33 8.19997 17.58 8.52997C17.84 8.84997 17.79 9.32997 17.46 9.57997L14.33 12.08C13.69 12.61 12.84 12.87 12 12.87Z"
                  fill="#1A143C"
                />
              </svg>
              <input
                type="text"
                placeholder="Email Address"
                className=" flex-grow appearance-none focus:outline-none border-none placeholder:text-text-secondary text-text-secondary"
              />
              <button className=" btn-primary">Subscribe</button>
            </div>

            <div className=" mt-[30px]">
              <p className="font-semibold text-text-primary">Choose Language</p>
              <button className=" text-text-primary flex items-center gap-[10px]">
                <svg
                  width="27"
                  height="20"
                  viewBox="0 0 27 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1224)">
                    <path d="M0 0H26.6667V20H0V0Z" fill="#012169" />
                    <path
                      d="M3.125 0L13.2917 7.54167L23.4167 0H26.6667V2.58333L16.6667 10.0417L26.6667 17.4583V20H23.3333L13.3333 12.5417L3.375 20H0V17.5L9.95833 10.0833L0 2.66667V0H3.125Z"
                      fill="white"
                    />
                    <path
                      d="M17.6667 11.7083L26.6667 18.3333V20L15.375 11.7083H17.6667ZM10 12.5417L10.25 14L2.25 20H0L10 12.5417ZM26.6667 0V0.125L16.2917 7.95833L16.375 6.125L24.5833 0H26.6667ZM0 0L9.95833 7.33333H7.45833L0 1.75V0Z"
                      fill="#C8102E"
                    />
                    <path
                      d="M10.0417 0V20H16.7083V0H10.0417ZM0 6.66667V13.3333H26.6667V6.66667H0Z"
                      fill="white"
                    />
                    <path
                      d="M0 8.04167V12.0417H26.6667V8.04167H0ZM11.375 0V20H15.375V0H11.375Z"
                      fill="#C8102E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1224">
                      <rect width="26.6667" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                English (UK)
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.6067 6.74999L10.7167 11.64C10.1392 12.2175 9.19419 12.2175 8.61669 11.64L3.72668 6.74999"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr className=" w-full border border-[#353535] mt-[50px]" />

        <div className="mt-[50px] flex justify-between items-center">
          <div className="logo">
            <img src="/vite.svg" alt="" />
            <p>Nidejia</p>
          </div>
          <p className=" text-text-secondary">
            All Rights Reserved Nidejia 2024
          </p>
        </div>
      </div>
    </div>
  );
};
