import React from "react";

function Newsletter() {
  return (
    <div className="group relative px-4 py-6 text-center">
      <div
        className="absolute inset-0 -z-10 -rotate-1 rounded-xl border border-gray-200 bg-gray-50 transition duration-150 ease-in-out group-hover:rotate-0"
        aria-hidden="true"
      />
      <div className="font-nycd mb-1 text-xl text-indigo-500">
        The Ultimate Magic Playgroup Finder
      </div>
      <div className="mb-5 text-2xl font-bold">
        Join our community Discord to get the latest updates
      </div>
      <form className="inline-flex max-w-sm">
        <div className="mx-auto flex max-w-xs flex-col justify-center sm:max-w-none sm:flex-row">
          {/* <input
            type="email"
            className="form-input mb-2 w-full py-1.5 sm:mb-0 sm:mr-2"
            placeholder="Your email"
            aria-label="Your email"
          /> */}
          <button
            className="btn whitespace-nowrap bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
            type="submit"
          >
            Join Discord
          </button>
        </div>
        {/* Success message */}
        {/* <p className="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
      </form>
    </div>
  );
}

export default Newsletter;
