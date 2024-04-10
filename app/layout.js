import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--poppins",
});
const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--bebas_neue",
});

export const metadata = {
  title: "Kshetez Vinayak's Resume",
  description: "My way to convince you that I am a great fit for your team.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} select-none scroll-smooth ${bebas_neue.variable}`}
    >
      <body className={poppins.className}>{children}</body>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </html>
  );
}
