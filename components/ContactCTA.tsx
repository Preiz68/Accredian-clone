export default function ContactCTA() {
  return (
    <div
      id="supportSection"
      className="flex justify-center w-full mt-16 sm:mt-24 md:px-12 px-4"
    >
      <div className="border w-full border-[#1A73E8] max-w-340 py-8 md:py-16 md:px-12 px-6 sm:bg-position-[center_top] bg-top-right bg-size-[700px_700px] bg-no-repeat bg-[url('/cta-circle.svg')] bg-[#1A73E8] rounded-xl flex items-center md:justify-between md:flex-row flex-col gap-6">
        <div className="flex gap-8 md:flex-row flex-col md:items-start items-center">
          <div className="w-20 h-20 shrink-0 bg-slate-200/35 rounded-xl p-1">
            <div className="w-full h-full bg-white rounded-xl p-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-full h-full text-[#1A73E8]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
              </svg>
            </div>
          </div>
          <div className="md:text-start text-center">
            <h1 className="text-xl md:text-3xl font-semibold text-white">
              Want to Learn More About Our Training Solutions?
            </h1>
          </div>
        </div>
        <button className="w-full max-w-[200px] py-2 sm:px-4 sm:py-3 mt-4 rounded-lg text-blue-500 bg-white text-xl font-semibold flex items-center justify-center gap-1">
          Contact Us
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
