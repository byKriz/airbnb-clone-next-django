import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { NavBar } from "./components/navbar/NavBar";
import { LoginModal } from "./components/modals/LoginModal";
import { SignupModal } from "./components/modals/SignupModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone - Django + NextJs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="pt-32">
          <main className="max-w-[1500px] mx-auto px-6 pb-6">{children}</main>
        </div>
        {/* <CustomModal isOpen={true}>ESTO ES UN PUTO CHILDREN</CustomModal> */}
        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
