"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import CommunityPageFree from "@/components/CommunityPageFree";
import CommunityPageLoggedIn from "@/components/CommunityPageLoggedIn";
import Footer from "@/components/Footer";
import { AuthProvider, useAuth } from "@/components/AuthContext";
import TippsSlideShow from "@/components/TippsSlideShow";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Navbar />
      <Hero />
      {children}
      <AuthBasedCommunity />
      <TippsSlideShow />
      <Footer />
    </AuthProvider>
  );
}

function AuthBasedCommunity() {
  const { isLoggedIn } = useAuth();
  console.log("isLoggedIn:", isLoggedIn);
  return isLoggedIn ? <CommunityPageLoggedIn /> : <CommunityPageFree />;
}
