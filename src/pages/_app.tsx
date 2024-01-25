import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { ThemeProvider } from "./theme-provider";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <AnimatePresence mode="wait">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Component key={router.route} {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </div>
  );
}
