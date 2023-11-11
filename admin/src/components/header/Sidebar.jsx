import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { SheetClose } from "../ui/Sheet";
import {
  ClipboardList,
  Gauge,
  LayoutGrid,
  Palette,
  Pentagon,
  ShoppingCart,
  User2,
} from "lucide-react";

const navbarContent = [
  {
    title: "Dashboard",
    link: "/",
    id: 1,
    icon: <Gauge size={26} />,
  },
  {
    title: "Customers",
    link: "/customers",
    id: 2,
    icon: <User2 size={26} />,
  },
  {
    dropdown: true,
    title: "Catalog",
    id: 3,
    icon: <ShoppingCart size={26} />,
    items: [
      {
        title: "Add Product",
        link: "/catalog/addproduct",
        icon: <ShoppingCart size={24} />,
        id: 101,
      },
      {
        title: "Product List",
        link: "/catalog/products",
        icon: <ShoppingCart size={24} />,
        id: 102,
      },
      {
        title: "Add Brand",
        link: "/catalog/addbrand",
        icon: <Pentagon size={24} />,
        id: 103,
      },
      {
        title: "Brand List",
        link: "/catalog/brands",
        icon: <Pentagon size={24} />,
        id: 104,
      },
      {
        title: "Add Category",
        link: "/catalog/addcategory",
        icon: <LayoutGrid size={24} />,
        id: 105,
      },
      {
        title: "Category List",
        link: "/catalog/categories",
        icon: <LayoutGrid size={24} />,
        id: 106,
      },
      {
        title: "Add Color",
        link: "/catalog/addcolor",
        icon: <Palette size={24} />,
        id: 107,
      },
      {
        title: "Color List",
        link: "/catalog/colors",
        icon: <Palette size={24} />,
        id: 108,
      },
    ],
  },
  {
    title: "Orders",
    link: "/orders",
    id: 4,
    icon: <ClipboardList size={26} />,
  },
  {
    title: "Enquiries",
    link: "/enquiries",
    id: 5,
    icon: <ClipboardList size={26} />,
  },
];

const Sidebar = () => {
  return (
    <>
      <ul className="flex flex-col gap-y-4 py-8">
        {navbarContent.map((item) => {
          return item.dropdown ? (
            <li key={item.id} className="">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${item.id}`}>
                  <Button
                    size="sm"
                    asChild
                    variant="ghost"
                    className="data w-full justify-start gap-x-2 last:[&[data-state=open]>svg]:rotate-180"
                  >
                    <AccordionTrigger>
                      {item.icon}
                      {item.title}
                    </AccordionTrigger>
                  </Button>
                  <AccordionContent>
                    <ul className="ml-8 mt-4 flex flex-col gap-y-2 rounded-md bg-accent p-4">
                      {item.items.map((el) => (
                        <li key={el.id}>
                          <SheetClose asChild>
                            <Button
                              asChild
                              size="xs"
                              variant="ghost"
                              className="w-full justify-start gap-x-2 hover:bg-background aria-[current=page]:bg-background"
                            >
                              <NavLink to={el.link}>
                                {el.icon}
                                {el.title}
                              </NavLink>
                            </Button>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ) : (
            <li key={item.id}>
              <SheetClose asChild>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="w-full justify-start gap-x-2 aria-[current=page]:bg-accent"
                >
                  <NavLink to={item.link}>
                    {item.icon}
                    {item.title}
                  </NavLink>
                </Button>
              </SheetClose>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Sidebar;
