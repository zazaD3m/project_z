import { ChevronDown } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  ListItem,
} from "../ui/navigation-menu";
import { Link } from "react-router-dom";

const HeaderBottomNavMenuItem = ({ dropDown, title, link }) => {
  return dropDown ? (
    <NavigationMenuItem className="flex items-center justify-center ">
      <NavigationMenuTrigger className="group flex select-none items-center justify-between gap-4 text-lg font-medium leading-none text-primary-foreground outline-none hover:text-yellow data-[state=open]:text-yellow">
        {title}{" "}
        <ChevronDown
          className="relative top-[1px] mr-8 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
          aria-hidden
        />
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute left-0 top-0 h-full w-full border-none bg-primary outline-none data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
        <nav>
          <ul className="grid grid-cols-3 grid-rows-1 gap-4 p-8">
            {dropDown.map((item, i) => (
              <ListItem key={i} title={item.title} listItems={item.content} />
            ))}
          </ul>
        </nav>
      </NavigationMenuContent>
    </NavigationMenuItem>
  ) : (
    <NavigationMenuItem className="flex items-center justify-center">
      <Link
        className="mr-8 select-none items-center text-lg font-medium leading-none text-primary-foreground outline-none hover:text-yellow"
        to={link}
      >
        {title}
      </Link>
    </NavigationMenuItem>
  );
};
export default HeaderBottomNavMenuItem;
