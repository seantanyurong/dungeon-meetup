import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const financier = localFont({
  src: [
    {
      path: "../styles/font/test-financier-display-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/font/test-financier-display-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/font/test-financier-display-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/font/test-financier-display-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-financier",
});

const montreal = localFont({
  src: [
    {
      path: "../styles/font/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../styles/font/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/font/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montreal",
});

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
        className={`${financier.variable} ${montreal.variable}  bg-gray-500 font-financier tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Component {...pageProps} />
        </div>
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
