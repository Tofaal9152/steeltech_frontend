// import { Toaster } from "sonner";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import QueryProvider from "./query-provider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      > */}
      <PreloaderWrapper>
        <QueryProvider>{children}</QueryProvider>
      </PreloaderWrapper>
      {/* <Toaster position="bottom-right" /> */}
      {/* </ThemeProvider> */}
    </>
  );
}
