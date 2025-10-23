import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/20">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-indigo-400"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Weekly Game Highlights
              </dt>
              <dd className="mt-2 text-base text-gray-400">
                Get handpicked indie game recommendations and updates straight to your inbox.
              </dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/20">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-indigo-400"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                No Spam. Just Games.
              </dt>
              <dd className="mt-2 text-base text-gray-400">
                We respect your inbox — only genuine news, new releases, and developer stories.
              </dd>
            </div>
          </dl>
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Stay Updated with GameHub 🎮
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Subscribe to our newsletter to get the latest updates on trending indie games, 
              developer spotlights, and exclusive early access announcements.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline outline-1 outline-offset-1 outline-white/20 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition"
              >
                Subscribe
              </button>
            </div>
          </div>

   
          
        </div>
      </div>

  
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-indigo-600 to-pink-500 opacity-30"
        />
      </div>


    </div>
  );
}
