import HeroSection from "../../components/HeroSection/Hero";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import ServicesSection from "../../components/Services/Services";
import FaqSection from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <FaqSection />
      {/* <TestimonialSlider /> */}
      <Footer />
    </div>
  );
};

export default Home;
