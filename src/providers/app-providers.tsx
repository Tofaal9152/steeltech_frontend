import PreloaderWrapper from "@/components/PreloaderWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import QueryProvider from "./query-provider";
import NextTopLoader from "nextjs-toploader";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <PreloaderWrapper> */}
        <QueryProvider>{children}</QueryProvider>
        <NextTopLoader showSpinner={false} color="#ed8c2f" />
        <ScrollToTop />
      {/* </PreloaderWrapper> */}
    </>
  );
}
