import localFont from "next/font/local";

export const Circular = localFont({
  src: [
    {
      path: "../public/fonts/circular/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/circular/CircularStd-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/circular/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Circular",
  display: "swap",
});
