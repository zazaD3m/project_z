import { useRef, useState } from "react";
import AccountMain from "./container/AccountMain";
import AccountSidebar from "./container/AccountSidebar";
import { cn } from "../../lib/utils";

const Account = () => {
  const windowSize = useRef(window.innerWidth);
  const [openedAccountComponent, setOpenedAccountComponent] =
    useState("default");

  return (
    <>
      <section className="container flex flex-col items-center bg-bggray p-7 py-10">
        <h2 className=" mb-4 text-4xl">Hello Zaza</h2>
        <div className="flex w-full gap-8">
          <AccountSidebar
            windowSize={windowSize.current}
            openedAccountComponent={openedAccountComponent}
            setOpenedAccountComponent={setOpenedAccountComponent}
            className="flex w-full flex-col items-center gap-8 rounded-md bg-white p-4 shadow-sm lg:basis-1/5"
          />
          <AccountMain
            className={cn(
              "fixed left-[50%] top-[50%] z-50 hidden h-full min-h-[288px] w-full translate-x-[-50%] translate-y-[-50%] lg:static lg:left-0 lg:top-0 lg:z-0 lg:block lg:basis-4/5 lg:translate-x-0 lg:translate-y-0",
              {
                block:
                  openedAccountComponent === "MyProfile" ||
                  openedAccountComponent === "MyAddress" ||
                  openedAccountComponent === "MyOrders",
              },
            )}
            windowSize={windowSize.current}
            openedAccountComponent={openedAccountComponent}
            setOpenedAccountComponent={setOpenedAccountComponent}
          />
        </div>
      </section>
    </>
  );
};
export default Account;
