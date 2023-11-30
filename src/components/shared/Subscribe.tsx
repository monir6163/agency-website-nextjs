const Subscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center max-w-screen-xl mx-auto px-4 py-20">
      <div className=" shadow-lg rounded px-2 lg:w-2/4 flex flex-col justify-center items-center py-10 lg:py-20">
        <div className="text-green-500 text-xl mb-5 font-medium uppercase">
          SUBSCRIBE
        </div>
        <div className="lg:w-96 text-center mb-3 text-black text-xl font-semibold capitalize">
          Subscribe to get the latest news about us
        </div>
        <div className="text-center text-zinc-500 mb-10 text-base font-medium capitalize">
          Please drop your email below to get daily update about what we do
        </div>
        <label
          htmlFor="Email"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Email
        </label>
        <div className="relative w-full lg:w-96">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1h12a1 1 0 011 1v.586l-7.293 7.293a.999.999 0 01-1.414 0L3 5.586V5a1 1 0 011-1zm12 12H4a1 1 0 01-1-1v-7.586l4.707 4.707a.999.999 0 001.414 0L15 7.414V15a1 1 0 01-1 1z"
                fill="#6B7280"
              />
            </svg>
          </div>
          <input
            type="email"
            id="Email"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 focus:outline-none"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
