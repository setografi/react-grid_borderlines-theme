import React from "react";
import Hero from "../components/home/Hero";
import Header from "../components/layout/Header";
import Services from "../components/home/Services";
import Logo from "../components/home/Logo";
import Tabs from "../components/home/Tabs";
import Testimonial from "../components/home/Testimonial";
import Cta from "../components/home/Cta";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="bg-lightGray-500 text-darkGray-500">
      <Header />
      <Hero />
      <Services />
      <Logo />
      <Tabs />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;
