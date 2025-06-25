// app/layout.tsx
import "@/styles/globals.css";
import { Navbar, Footer, WAButton } from "@/components";

export const metadata = {
  title: "#1 BARBER IN CANGGU",
  description: "Stay sharp, stay fresh. Premium cuts.",
  icons: {
    icon: "/barber-icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WAButton />
      </body>
    </html>
  );
}
