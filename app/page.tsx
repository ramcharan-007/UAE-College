import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
