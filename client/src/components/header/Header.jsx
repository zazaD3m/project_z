import Headertop from "./Headertop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div className="container flex items-center justify-center border-b-2 border-[#767e87] bg-primary px-8 py-2 text-sm text-primary-foreground  sm:justify-between sm:px-20 2xl:px-28">
        <Headertop />
      </div>
      <header
        className={`sticky z-50 transition-all duration-500 ${
          scrollDirection === "down" ? "-top-[66px] lg:-top-[120px]" : "-top-px"
        } h-[66px] bg-primary text-primary-foreground lg:h-[120px]`}
      >
        <div className="container flex items-center justify-between border-b-2 border-[#767e87] border-opacity-60 bg-primary-light py-3.5 lg:bg-primary">
          <HeaderMiddle />
        </div>
        <div className="container hidden items-center justify-center border-b-2 border-[#767e87] border-opacity-40 bg-primary-light py-2 lg:flex lg:justify-start">
          <HeaderBottom />
        </div>
      </header>
    </>
  );
};
export default Header;
