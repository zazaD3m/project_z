import Headertop from "./Headertop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-center border-b-2 border-[#767e87] px-8 py-2 text-sm  sm:justify-between sm:px-20 2xl:px-28">
          <Headertop />
        </div>
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
