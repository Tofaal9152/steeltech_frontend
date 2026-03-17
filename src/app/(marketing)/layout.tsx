import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function MarkettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <section className="min-h-screen">{children}</section>
      <Footer />
    </section>
  );
}
