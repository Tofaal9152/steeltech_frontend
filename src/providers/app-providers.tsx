// import { Toaster } from "sonner";
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
      <QueryProvider>{children}</QueryProvider>
      {/* <Toaster position="bottom-right" /> */}
      {/* </ThemeProvider> */}
    </>
  );
}
