export const metadata = {
  metadataBase: new URL("https://joinlabyrinth.vercel.app/"),
  title: "Labyrinth",
  description: "The private network for restaurant, cafe and bar owners.",
  openGraph: {
    images: "/og-image.png",
  },
};

import Header from "~/components/general/header";
import Footer from "~/components/general/footer";
import Hero from "src/components/home-page/hero";
import Features from "src/components/home-page/features";
import Introduction from "src/components/home-page/introduction";
import FeatureBlocks from "src/components/home-page/feature-blocks";
import Companies from "src/components/home-page/companies";
import Conclusion from "src/components/home-page/conclusion";
import Cta from "src/components/home-page/cta";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Introduction />
      <FeatureBlocks />
      <Companies />
      <Conclusion />
      <Cta />
      <Footer />
    </>
  );
}
