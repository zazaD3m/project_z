/* eslint-disable no-unused-vars */
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { Separator } from "./separator";

const NavigationMenu = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn("", className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  ),
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn("", className)}
      {...props}
    >
      {children}{" "}
    </NavigationMenuPrimitive.Trigger>
  ),
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn("", className)}
      {...props}
    />
  ),
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Viewport
      className={cn("", className)}
      ref={ref}
      {...props}
    />
  ),
);
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const ListItem = ({ className, title, listItems, ...props }) => (
  <li className="flex flex-col  justify-start gap-2 rounded-lg bg-primary-light p-4 pr-16">
    <h2 className="select-none">{title}</h2>
    <Separator />
    <ul className="flex flex-col gap-4 pt-4">
      {listItems.map((item, i) => (
        <li key={i}>
          <NavigationMenuLink asChild>
            <Link
              className={cn(
                "group block select-none pl-4 uppercase leading-none no-underline outline-none transition-colors",
                className,
              )}
              {...props}
              to={item.link}
            >
              <span className="leading-[1.4] text-primary-foreground group-hover:text-yellow">
                {item.contentTitle}
              </span>
            </Link>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </li>
);
ListItem.displayName = "ListItem";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  ListItem,
};
