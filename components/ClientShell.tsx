'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loader />
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </>
  );
}
