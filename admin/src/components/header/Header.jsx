import { Menu, Search } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ModeToggle } from "../ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <>
      <header className="flex h-12 w-full gap-x-8 border-b bg-background px-2 py-1 pr-4">
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <nav>
              <SheetContent className="w-[300px] overflow-y-auto" side="left">
                <Sidebar />
              </SheetContent>
            </nav>
          </Sheet>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input className="max-w-xs" type="text" placeholder="Search ..." />
          <Button variant="outline" size="icon" type="submit">
            <Search />
          </Button>
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>
    </>
  );
};
export default Header;
