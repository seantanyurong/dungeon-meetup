import React, { useState, useEffect } from "react";
import Image from "next/image";
import { api } from "~/utils/api";
import Logo from "~/components/general/logo";

// import Illustration from "../images/auth-illustration.svg";
// import TestimonialAuth04 from "public/images/temp/testimonial-auth-04.jpg";
// import TestimonialAuth05 from "public/images/temp/testimonial-auth-05.jpg";
// import TestimonialAuth06 from "public/images/temp/testimonial-auth-06.jpg";
// import { format } from "path";
// import UploadImage from "public/images/temp/upload.jpg";

function CreatePlaygroup() {
  const { data: formatTypes } = api.format.getAll.useQuery();
  const [Lgs, setLgs] = useState(false);
  const [card, setCard] = useState<ScryfallCard>();

  // Add a selected state to the different formats
  const formatTypeWithSelect = formatTypes?.map((formatType) => ({
    ...formatType,
    selected: false,
  }));

  interface ScryfallCard {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: number[];
    tcgplayer_id: number;
    cardmarket_id: number;
    name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_status: string;
    image_uris: {
      art_crop: string;
      border_crop: string;
      large: string;
      normal: string;
      png: string;
      small: string;
    };
    mana_cost: string;
    cmc: number;
    type_line: string;
    oracle_text: string;
    power: string;
    toughness: string;
    colors: string[];
    color_identity: string[];
    keywords: [];
    legalities: object;
    games: string[];
    reserved: boolean;
    foil: boolean;
    nonfoil: boolean;
    finishes: string[];
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    variation: boolean;
    set_id: string;
    set: string;
    set_name: string;
    set_type: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    flavor_text: string;
    card_back_id: string;
    artist: string;
    artist_ids: string[];
    illustration_id: string;
    border_color: string;
    frame: string;
    full_art: boolean;
    textless: boolean;
    booster: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    prices: object;
    related_uris: object;
    purchase_uris: object;
  }

  const [formatTypesState, setFormatTypesState] =
    useState(formatTypeWithSelect);

  // Get card from scryfall
  function getRandomCard(): Promise<ScryfallCard> {
    return fetch("https://api.scryfall.com/cards/random?q=is%3Acommander", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        return res as ScryfallCard;
      });
  }

  useEffect(() => {
    setFormatTypesState(formatTypeWithSelect);
    getRandomCard()
      .then((randomCard) => {
        setCard(randomCard);
        console.log(randomCard);
      })
      .catch(() => console.log("Failed to get random card"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formatTypes]);

  return (
    <main className="flex">
      {/* Content */}
      <div className="min-h-screen w-full lg:w-1/2">
        <div className="h-full px-5 sm:px-6">
          <div className="mx-auto flex h-full w-full max-w-md flex-col px-6 after:mt-auto after:flex-1">
            {/* Site header */}
            <header className="mb-auto flex flex-1">
              <div className="flex h-16 items-center justify-between md:h-32">
                {/* Logo */}
                <Logo />
                {/* <Link className="group block" href="/" aria-label="Cruip">
                  <svg
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-indigo-500"
                      d="M13.853 18.14 1 10.643 31 1l-.019.058z"
                    />
                    <path
                      className="fill-indigo-300"
                      d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"
                    />
                  </svg>
                </Link> */}
              </div>
            </header>

            <div className="flex-1 py-8">
              <div className="mb-10">
                <h1 className="mb-2 text-3xl font-extrabold">
                  Create a Playgroup
                </h1>
                <div className="text-gray-500">
                  Take 2 mins to create a playgroup and start finding other
                  players today.
                </div>
              </div>

              {/* Form */}
              <form className="mb-12">
                <div className="-my-6 divide-y divide-gray-200">
                  {/* Group #1 */}
                  <div className="py-6">
                    <div className="mb-5 text-lg font-bold text-gray-800">
                      <span className="text-indigo-500">1.</span> The Overview
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="name"
                        >
                          Playgroup Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          className="form-input w-full"
                          type="text"
                          required
                          placeholder="E.g., Singapore EDH Superstars"
                        />
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-800"
                          htmlFor="description"
                        >
                          Brief Description{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          placeholder="E.g., We play casual EDH every Saturday night at my place in Bukit Panjang."
                          id="description"
                          className="form-textarea w-full py-2 text-sm"
                          rows={4}
                          required
                        />
                      </div>
                      {/* <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="file"
                        >
                          Company Logo{" "}
                          <span className="text-gray-500">(optional)</span>
                        </label>
                        <div className="flex items-center">
                          <div className="mr-4 shrink-0">
                            <Image
                              className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                              src={UploadImage}
                              alt="Upload"
                            />
                          </div>
                          <div>
                            <input
                              id="file"
                              type="file"
                              className="block w-full cursor-pointer text-sm text-gray-500 transition duration-150 ease-in-out file:mr-4 file:rounded-full file:border-0 file:bg-indigo-500 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white hover:file:bg-indigo-600"
                            />
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* Group #2 */}
                  <div className="py-6">
                    <div className="mb-5 text-lg font-bold text-gray-800">
                      <span className="text-indigo-500">2.</span> The Details
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="position"
                        >
                          Current Size <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="position"
                          className="form-input w-full"
                          type="number"
                          required
                          placeholder="E.g., 2"
                        />
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="position"
                        >
                          Max Size <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="position"
                          className="form-input w-full"
                          type="number"
                          required
                          placeholder="E.g., 5"
                        />
                      </div>

                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-800"
                          htmlFor="role"
                        >
                          Physical or Remote?{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="role"
                          className="form-select w-full py-2 text-sm"
                          required
                        >
                          <option>Physical</option>
                          <option>Remote</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="position"
                        >
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="position"
                          className="form-input w-full"
                          type="number"
                          required
                          placeholder="E.g., Singapore"
                        />
                      </div>

                      {/* <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="salary"
                        >
                          Salary{" "}
                          <span className="text-gray-500">(optional)</span>
                        </label>
                        <input
                          id="salary"
                          className="form-input w-full"
                          type="text"
                        />
                        <div className="mt-2 text-xs italic text-gray-500">
                          Example: “$100,000 - $170,000 USD”
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="py-6">
                    <div className="mb-5 text-lg font-bold text-gray-800">
                      <span className="text-indigo-500">3.</span> What formats
                      do you play?
                    </div>
                    <div>
                      {/* <label
                        className="mb-1 block text-sm font-medium text-gray-800"
                        htmlFor="commitment"
                      >
                        Formats <span className="text-rose-500">*</span>
                      </label> */}
                      <ul>
                        {formatTypesState &&
                          formatTypesState?.map((formatType, index) => {
                            return (
                              <button
                                className={`mb-2 w-full rounded border px-4 py-3 text-left ${
                                  !formatType.selected
                                    ? "border-gray-200"
                                    : "border-indigo-500 ring-2 ring-indigo-200"
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  // Need to create a new array - can't just set back old array since it doesn't see it as a different object
                                  const tempArr = [...formatTypesState];

                                  if (tempArr[index] != undefined) {
                                    // I give up. Workarounds don't work cause system thinks index might change in middle maybe.
                                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                    tempArr[index]!.selected =
                                      !formatType.selected;
                                  }
                                  setFormatTypesState(tempArr);
                                }}
                                key={formatType.id}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="mb-1 text-sm font-medium text-gray-800">
                                      {formatType.formatType}
                                    </div>
                                  </div>
                                  <div className="ml-3 shrink-0 rounded-full border border-gray-200">
                                    {!formatType.selected ? (
                                      <svg
                                        className="fill-indigo-500"
                                        width="32"
                                        height="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                                      </svg>
                                    ) : (
                                      <svg
                                        x-show="checked"
                                        className="fill-teal-500"
                                        width="32"
                                        height="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </button>
                              //   <li key={formatType.id}>
                              //     <div className="flex flex-row items-center">
                              //       <input
                              //         type="checkbox"
                              //         className="cursor-pointer"
                              //       />
                              //       <label className="ml-1 text-sm text-gray-800">
                              //         {formatType.formatType}
                              //       </label>
                              //     </div>
                              //   </li>
                            );
                          })}
                      </ul>
                      {/* <select
                          id="commitment"
                          className="form-select w-full py-2 text-sm"
                          required
                        >
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Intership</option>
                          <option>Contract / Freelance</option>
                          <option>Co-founder</option>
                        </select> */}
                    </div>
                  </div>

                  {/* Group #3 */}
                  <div className="py-6">
                    <div className="mb-5 text-lg font-bold text-gray-800">
                      <span className="text-indigo-500">4.</span> Are you
                      representing an LGS?
                    </div>
                    <div className="space-y-4">
                      <button
                        className={`w-full rounded border px-4 py-3 text-left ${
                          !Lgs
                            ? "border-gray-200"
                            : "border-indigo-500 ring-2 ring-indigo-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setLgs(!Lgs);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="mb-1 text-sm font-medium text-gray-800">
                              I am representing an LGS
                            </div>
                            <div className="text-sm italic text-gray-500">
                              We will reach out for verification
                            </div>
                          </div>
                          <div className="ml-3 shrink-0 rounded-full border border-gray-200">
                            {!Lgs ? (
                              <svg
                                className="fill-indigo-500"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                              </svg>
                            ) : (
                              <svg
                                x-show="checked"
                                className="fill-teal-500"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </button>
                      {/* <button
                        className={`w-full rounded border px-4 py-3 text-left ${
                          highlight
                            ? "border-indigo-500 ring-2 ring-indigo-200"
                            : "border-gray-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setHighlight(!highlight);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="mb-1 text-sm font-medium text-gray-800">
                              Highlight your post in indigo (+$49)
                            </div>
                            <div className="text-sm italic text-gray-500">
                              2x more views
                            </div>
                          </div>
                          <div className="ml-3 shrink-0 rounded-full border border-gray-200">
                            {highlight ? (
                              <svg
                                className="fill-indigo-500"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                              </svg>
                            ) : (
                              <svg
                                x-show="checked"
                                className="fill-teal-500"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </button> */}
                    </div>
                    <div className="mt-6">
                      <button className="btn w-full bg-indigo-500 text-white shadow-sm hover:bg-indigo-600">
                        Create Playgroup
                      </button>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs text-gray-500">
                        By clicking pay you agree to our{" "}
                        <a className="underline" href="#0">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a className="underline" href="#0">
                          Privacy Policy
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div
        className="fixed bottom-0 right-0 top-0 hidden overflow-hidden lg:block lg:w-1/2"
        aria-hidden="true"
      >
        {/* Bg */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100 to-white"
          aria-hidden="true"
        />

        {/* Illustration */}
        <div
          className="pointer-events-none absolute right-0 -z-10 hidden md:block"
          aria-hidden="true"
        >
          {/* <Image
            src={Illustration}
            className="max-w-none"
            width="1440"
            height="900"
            alt="Page Illustration"
          /> */}
        </div>

        {/* Quotes */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="px-5 py-8 sm:px-6">
            <div className="mx-auto w-full max-w-xl">
              {card && (
                <Image
                  src={card?.image_uris?.png || ""}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              )}
              {/* <div className="group space-y-3">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 opacity-30 transition duration-150 ease-in-out hover:opacity-100">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <Image
                        className="rounded-full"
                        src={TestimonialAuth04}
                        width="88"
                        height="88"
                        alt="Testimonial 04"
                      />
                      <svg
                        className="absolute right-0 top-0 fill-indigo-400"
                        width="26"
                        height="17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="m-0 pb-1 font-bold">
                        <p>
                          Listing our jobs through JobBoard was simple, quick,
                          and helped us find amazing candidates.
                        </p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Lisa Smith, developer at{" "}
                        <a className="text-sky-500 hover:underline" href="#0">
                          AppyYou
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 transition duration-150 ease-in-out hover:opacity-100">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <Image
                        className="rounded-full"
                        src={TestimonialAuth05}
                        width="88"
                        height="88"
                        alt="Testimonial 05"
                      />
                      <svg
                        className="absolute right-0 top-0 fill-indigo-400"
                        width="26"
                        height="17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="m-0 pb-1 font-bold">
                        <p>
                          Listing our jobs through JobBoard was simple, quick,
                          and helped us find amazing candidates.
                        </p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Mark Mills, developer at{" "}
                        <a className="text-sky-500 hover:underline" href="#0">
                          App.com
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 opacity-30 transition duration-150 ease-in-out hover:opacity-100">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <Image
                        className="rounded-full"
                        src={TestimonialAuth06}
                        width="88"
                        height="88"
                        alt="Testimonial 06"
                      />
                      <svg
                        className="absolute right-0 top-0 fill-indigo-400"
                        width="26"
                        height="17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="m-0 pb-1 font-bold">
                        <p>
                          Listing our jobs through JobBoard was simple, quick,
                          and helped us find amazing candidates.
                        </p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Lisa Smith, developer at{" "}
                        <a className="text-sky-500 hover:underline" href="#0">
                          AppyYou
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreatePlaygroup;
