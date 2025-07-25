"use client";

import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from "./components/Navbar/Navbar"; 
import BootstrapClient from "./components/BootstrapClient/BootstrapClient"; 
import { ReactQueryClientProvider } from "./components/ReactQueryClient/ReactQueryClient"; 
import React from 'react'; 
import { QueryClient, QueryClientProvider } from 'react-query'; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <ReactQueryClientProvider>
            <Navbar />
            {children}
            <BootstrapClient />
          </ReactQueryClientProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}