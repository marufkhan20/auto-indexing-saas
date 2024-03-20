"use client";
import Blog from "@/components/home/Blog";
import Faq from "@/components/home/faq";
import FooterNav from "@/components/home/FooterNav";
import GetStarted from "@/components/home/GetStarted";
import Guide from "@/components/home/Guide";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/pricing";
import Testimonial from "@/components/home/testimonial";
import Main from "@/components/Main";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <Main>
      <main className="mt-[70px]">
        <Header />
        <Hero />
        <Guide />
        <HowItWorks />
        <Pricing />
        <Testimonial />
        <Faq />
        <Blog />
        <GetStarted />
        <FooterNav />
        <Footer />
      </main>
    </Main>
  );
}
