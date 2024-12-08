import React from "react";
import Hero from "../components/home/Hero";
import Header from "../components/layout/Header";
import Services from "../components/home/Services";
import Logo from "../components/home/Logo";
import Tabs from "../components/home/Tabs";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Logo />
      <Tabs />
    </>
  );
}

export default Home;
