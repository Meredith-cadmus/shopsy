import HeroSection from "./component/Hero/HeroSection";
import Navbar from "./component/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSection from "./component/Product/ProductSection";
import TopProducts from "./component/Product/TopProducts";
import BannerSection from "./component/Banner/BannerSection";
import Subscribe from "./component/Banner/Subscribe";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import OredrSection from "./component/OredrSection";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(false);

  const handleOrder = () => {
    setOrder(!order);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrder={handleOrder} />
      <HeroSection />
      <ProductSection />
      <TopProducts />
      <BannerSection />
      <Subscribe />
      <Testimonials />
      <Footer />
      <OredrSection order={order} setOrder={setOrder} />
    </div>
  );
}

export default App;
