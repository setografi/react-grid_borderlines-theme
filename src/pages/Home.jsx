import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Logo from "../components/home/Logo";
import Tabs from "../components/home/Tabs";
import Testimonial from "../components/home/Testimonial";
import Cta from "../components/home/Cta";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Logo />
      <Tabs />
      <Testimonial />
      <Cta />
    </>
  );
}

export default Home;
