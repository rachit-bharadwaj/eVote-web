import { ReactNode } from "react";
import { Footer, Navbar } from "@/components/shared";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
