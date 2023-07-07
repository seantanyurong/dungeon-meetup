import { useRouter } from "next/router";

import Image from "next/image";
import { api } from "~/utils/api";
import Logo from "~/components/general/logo";
import { useFormik } from "formik";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import type { ScryfallCard } from "~/utils/types";

function PlaygroupApplication() {
  // Fetch playgroup id from URL
  const router = useRouter();
  const playgroupId = Array.isArray(router.query.playgroupId)
    ? router.query.playgroupId[0]
    : router.query.playgroupId;

  const [card, setCard] = useState<ScryfallCard>();

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // Fetch playgroup data from ID
  const { isLoading, data: playgroupData } = api.playgroup.getById.useQuery({
    id: playgroupId || "",
  });

  useEffect(() => {
    // Gets scryfall card by ID
    const getCardById = async () => {
      await fetch(
        `https://api.scryfall.com/cards/${playgroupData?.cardId || "123"}`, // I need this to wait for playgroup data
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setCard(res as ScryfallCard);
        });
    };

    getCardById().catch(() => console.log("Failed to get card"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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
                  Send an Application
                </h1>
                <div className="text-gray-500">
                  An email will be sent to the playgroup&apos;s owner. If
                  interested, he or she will reach back out to you.
                </div>
              </div>

              {/* Form */}

              <form onSubmit={formik.handleSubmit} className="mb-12">
                <div className="-my-6 divide-y divide-gray-200">
                  {/* Group #1 */}
                  <div className="py-6">
                    <div className="space-y-4">
                      <div>
                        <label
                          className="mb-1 block text-sm font-medium text-gray-800"
                          htmlFor="description"
                        >
                          Introduction
                          <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          placeholder="E.g., Hi, I'm Bob - 30 years old. Currently living in Singapore. Been playing since revised and looking to pick up EDH to play weekly. Keen to join your group!"
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

                  {/* Group #3 */}
                  <div className="py-6">
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="btn w-full bg-violet-600 text-white shadow-sm hover:bg-black"
                      >
                        Send Application
                      </button>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs text-gray-500">
                        By clicking send you agree to our{" "}
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
              {card?.image_uris === undefined ? (
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
              ) : (
                <Image
                  src={card.image_uris?.png}
                  width={500}
                  height={500}
                  alt="Magic card"
                  className="mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PlaygroupApplication;
