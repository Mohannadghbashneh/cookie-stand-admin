"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeWrapper from "./contexts/theme";
import { AuthWrapper } from './contexts/auth';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <AuthWrapper>
      <ThemeWrapper>
      <body >
      <Header />
          {children}
          <Footer />
        </body>
      </ThemeWrapper>
      </AuthWrapper>
    </html>
  );
}