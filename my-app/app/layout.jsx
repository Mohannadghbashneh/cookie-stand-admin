"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeWrapper from "./contexts/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <ThemeWrapper>
      <body >
      <Header />
          {children}
          <Footer />
        </body>
      </ThemeWrapper>
    </html>
  );
}