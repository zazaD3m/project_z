import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import HeaderBottomNavMenuItem from "./HeaderBottomNavMenuItem";
import { navContent } from "../../assets/data";

const postNavContent = (navContent) => {
  return navContent.map((navItem, i) => {
    return (
      <HeaderBottomNavMenuItem
        key={i}
        dropDown={navItem.dropDown}
        title={navItem.title}
        link={navItem.link}
      />
    );
  });
};

const HeaderBottom = () => {
  return (
    <NavigationMenu className="relative z-20 hidden w-screen justify-center lg:flex">
      <NavigationMenuList className="flex list-none bg-transparent py-1">
        {postNavContent(navContent)}
      </NavigationMenuList>

      <div className="absolute left-0 top-full flex w-full justify-center perspective-[1200px]">
        <NavigationMenuViewport className="relative mt-[10px] h-[540px]  w-3/4 origin-[top_center] overflow-hidden rounded-[6px] bg-primary transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu>
  );
};
export default HeaderBottom;
