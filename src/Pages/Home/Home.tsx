import FeaturedBooks from "../../components/Home/FeaturedBooks";
import Gallery from "../../components/Home/Gallery/Gallery";
import Hero from "../../components/Home/Hero/Hero";
import HowItWorks from "../../components/Home/HowItWorks";
import WhyChooseUs from "../../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <HowItWorks />
      <WhyChooseUs />
      <Gallery />
    </div>
  );
};

export default Home;
