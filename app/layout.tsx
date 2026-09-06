import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "MOVIN | Packaging Solutions",
  description: "Professional packaging solutions for growing businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}