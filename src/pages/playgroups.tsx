export const metadata = {
  metadataBase: new URL("https://joinlabyrinth.vercel.app/"),
  title: "Labyrinth",
  description: "The private network for restaurant, cafe and bar owners.",
  openGraph: {
    images: "/og-image.png",
  },
};

import React from "react";

import Header from "~/components/general/header";
import Hero from "~/components/playgroups-page/Hero";
import Sidebar from "~/components/playgroups-page/Sidebar";
import JobList from "~/components/playgroups-page/PlaygroupList";
import Footer from "~/components/general/footer";

function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <Hero />

        {/*  Page content */}
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="py-8 md:py-16">
              <div className="md:flex md:justify-between" data-sticky-container>
                <Sidebar />

                {/* Main content */}
                <div className="md:grow">
                  <JobList />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
