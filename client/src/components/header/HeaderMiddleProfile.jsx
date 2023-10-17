import { User } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

const HeaderMiddleProfile = () => {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="m-0 gap-2 p-0">
            <User strokeWidth={1.75} className=" sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
            <p className="hidden select-none lg:block">
              My
              <br />
              Account
            </p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={14}
          className="mt-[6px] max-w-[200px] rounded-br-none bg-bggray py-2 sm:rounded-br-md lg:mr-0 lg:mt-0"
        >
          <DropdownMenuItem asChild>
            <Button
              asChild
              variant="ghost"
              className="w-full outline-none hover:bg-white"
            >
              <Link to="account/login">Log In</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              asChild
              variant="ghost"
              className="w-full outline-none hover:bg-white"
            >
              <Link to="account/register">Register</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              asChild
              variant="ghost"
              className="w-full outline-none hover:bg-white"
            >
              <Link to="account/logout">Log Out</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              asChild
              variant="ghost"
              className="w-full outline-none hover:bg-white"
            >
              <Link to="account">Account</Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default HeaderMiddleProfile;
