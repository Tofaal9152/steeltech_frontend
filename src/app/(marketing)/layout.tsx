import Navbar from "@/components/layout/Navbar/Navbar";

export default function MarkettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
