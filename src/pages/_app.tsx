import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import localFont from "next/font/local";
import { useEffect } from "react";
import { Rubik } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const inter = Rubik({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <ClerkProvider>
      <main
        className={`bg-white tracking-tight text-black antialiased ${inter.className}`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Component {...pageProps} />
        </div>
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
