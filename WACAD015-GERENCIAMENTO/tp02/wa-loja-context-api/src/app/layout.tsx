"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";
import { FavoritosProvider } from "./contexts/FavoritosContext";
import { AuthProvider } from "./components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <FavoritosProvider>
            <Navbar />
            {children}
            <BootstrapClient />
          </FavoritosProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
