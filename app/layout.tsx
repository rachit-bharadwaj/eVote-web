import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "eVote",
  description:
    "Evote is a comprehensive platform for issue tracking, service rating, authentication, voting, and political engagement. Join us in shaping the future of democracy!",
  keywords:
    "Evote, digital democracy, issue tracking, service rating, voting platform, political engagement, citizen empowerment",
  category:
    "Civic Technology, Political Engagement, Digital Democracy, Voting Platform,  Issue Tracking, Service Rating, Citizen Empowerment",
  creator: "Rachit Bharadwaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
