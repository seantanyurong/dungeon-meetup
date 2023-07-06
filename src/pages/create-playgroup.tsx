import React, { useState, useEffect } from "react";
import Image from "next/image";
import { api } from "~/utils/api";
import Logo from "~/components/general/logo";
import type { ScryfallCard } from "~/utils/types";
import { useFormik } from "formik";
import PlacesAutocomplete from "react-places-autocomplete";
import { Oval } from "react-loader-spinner";

function CreatePlaygroup() {
  const { data: formatTypes } = api.format.getAll.useQuery();
  const [card, setCard] = useState<ScryfallCard>();
  const [city, setCity] = useState("");

  const handleCityChange = (city: string) => {
    setCity(city);
    formik.setFieldValue("city", city).catch(() => console.log("City error"));
  };

  const createPlaygroupMutation = api.playgroup.createPlaygroup.useMutation();

  const formik = useFormik({
    initialValues: {
      currentSize: +"",
      maxSize: +"",
      formats: [{ id: "" }],
      description: "",
      name: "",
      city: "",
      lgs: false,
      physical: "Physical",
      cardId: "",
      sticky: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      createPlaygroupMutation.mutate(values);
    },
  });

  // Add a selected state to the different formats
  const formatTypeWithSelect = formatTypes?.map((formatType) => ({
    ...formatType,
    selected: false,
  }));

  const [formatTypesState, setFormatTypesState] =
    useState(formatTypeWithSelect);

  // Gets a random commander card from scryfall
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
        formik
          .setFieldValue("cardId", randomCard.id)
          .catch(() => console.log("Failed to set cardId"));
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

              <form onSubmit={formik.handleSubmit} className="mb-12">
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
                          name="name"
                          className="form-input w-full"
                          type="text"
                          required
                          placeholder="E.g., Singapore EDH Superstars"
                          onChange={formik.handleChange}
                          value={formik.values.name}
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
                          name="description"
                          className="form-textarea w-full py-2 text-sm"
                          rows={4}
                          required
                          onChange={formik.handleChange}
                          value={formik.values.description}
                        />
                      </div>
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
                          htmlFor="currentSize"
                        >
                          Current Size <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="currentSize"
                          name="currentSize"
                          className="form-input w-full"
                          type="number"
                          required
                          placeholder="E.g., 2"
                          onChange={formik.handleChange}
                          value={formik.values.currentSize}
                        />
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="maxSize"
                        >
                          Max Size <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="maxSize"
                          name="maxSize"
                          className="form-input w-full"
                          type="number"
                          required
                          placeholder="E.g., 5"
                          onChange={formik.handleChange}
                          value={formik.values.maxSize}
                        />
                      </div>

                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-800"
                          htmlFor="physical"
                        >
                          Physical or Remote?{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="physical"
                          name="physical"
                          className="form-select w-full py-2 text-sm"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.physical}
                        >
                          <option value="Physical">Physical</option>
                          <option value="Remote">Remote</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium"
                          htmlFor="city"
                        >
                          City <span className="text-red-500">*</span>
                        </label>
                        <PlacesAutocomplete
                          value={city}
                          onChange={handleCityChange}
                          //   onSelect={handleCitySelect}
                          searchOptions={{ types: ["locality"] }} // limits to cities only
                        >
                          {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                          }) => (
                            <div>
                              <input
                                {...getInputProps({
                                  id: "city",
                                  name: "city",
                                  placeholder: "E.g., Singapore",
                                  type: "text",
                                  className:
                                    "location-search-input form-input w-full",
                                  required:
                                    formik.values.physical === "Physical",
                                  disabled:
                                    formik.values.physical !== "Physical",
                                })}
                              />
                              <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion) => {
                                  const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                  // inline style for demonstration purpose
                                  const style = suggestion.active
                                    ? {
                                        backgroundColor: "#fafafa",
                                        cursor: "pointer",
                                      }
                                    : {
                                        backgroundColor: "#ffffff",
                                        cursor: "pointer",
                                      };
                                  return (
                                    <div
                                      {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                      })}
                                      key={1}
                                    >
                                      <span>{suggestion.description}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </PlacesAutocomplete>
                        {/* <input
                          id="city"
                          name="city"
                          className="form-input w-full"
                          type="text"
                          required
                          placeholder="E.g., Singapore"
                          onChange={formik.handleChange}
                          value={formik.values.city}
                        /> */}
                      </div>
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
                                  // The array is to manage the state, and this formik call is to manage the actual value being submitted
                                  formik
                                    .setFieldValue(
                                      "formats",
                                      tempArr
                                        .filter((obj) => obj.selected === true)
                                        .map((obj) => {
                                          return { id: obj.id };
                                        })
                                    )
                                    .catch(() =>
                                      console.log(
                                        "Failured to add format value"
                                      )
                                    );
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
                            );
                          })}
                      </ul>
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
                          !formik.values.lgs
                            ? "border-gray-200"
                            : "border-indigo-500 ring-2 ring-indigo-200"
                        }`}
                        name="lgs"
                        onClick={(e) => {
                          e.preventDefault();
                          formik
                            .setFieldValue("lgs", !formik.values.lgs)
                            .catch(() => console.log("LGS Button error"));
                          //   setLgs(!Lgs);
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
                            {!formik.values.lgs ? (
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
                      <button
                        type="submit"
                        className="btn w-full bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
                      >
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

        {/* Quotes */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="px-5 py-8 sm:px-6">
            <div className="mx-auto w-full max-w-xl">
              {card ? (
                <Image
                  src={card?.image_uris?.png || ""}
                  width={500}
                  height={500}
                  alt="Magic card"
                  className="mx-auto"
                />
              ) : (
                <Oval
                  height={60}
                  width={60}
                  color="#9146FF"
                  wrapperStyle={{ display: "flex", justifyContent: "center" }}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#9146FF"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreatePlaygroup;
