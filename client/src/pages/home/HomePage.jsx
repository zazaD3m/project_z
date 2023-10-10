import Blogs from "./container/Blogs";
import Brands from "./container/Brands";
import Categories from "./container/Categories";
import FeaturedCollection from "./container/FeaturedCollection";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCollection />
      <Brands />
      <Blogs />
    </>
  );
};
export default HomePage;
