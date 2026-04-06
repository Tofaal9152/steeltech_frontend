import PreloaderWrapper from "@/components/PreloaderWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import QueryProvider from "./query-provider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PreloaderWrapper>
        <QueryProvider>{children}</QueryProvider>
        <ScrollToTop />
      </PreloaderWrapper>
    </>
  );
}
