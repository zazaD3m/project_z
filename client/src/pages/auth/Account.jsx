import { useEffect, useRef, useState } from "react";
import AccountMain from "./container/AccountMain";
import AccountSidebar from "./container/AccountSidebar";
import { cn } from "../../lib/utils";
import { useNavigate, useParams } from "react-router-dom";

const Account = () => {
  let { accountPage } = useParams();
  const navigate = useNavigate();
  let { current: windowSize } = useRef(window.innerWidth);

  useEffect(() => {
    if (accountPage === undefined && windowSize > 1023) {
      navigate("/account/profile");
    }
  }, [accountPage]);

  return (
    <>
      <section className="container flex flex-col items-center bg-bggray p-7 py-10">
        <h2 className=" mb-4 text-4xl">Hello Zaza</h2>
        <div className="flex w-full gap-8">
          <AccountSidebar
            windowSize={windowSize.current}
            className="flex w-full flex-col items-center gap-8 rounded-md bg-white p-4 shadow-sm lg:basis-1/5"
          />
          <AccountMain
            accountPage={accountPage}
            className={cn(
              "fixed left-[50%] top-[50%] z-50 hidden h-full min-h-[288px] w-full translate-x-[-50%] translate-y-[-50%] lg:static lg:left-0 lg:top-0 lg:z-0 lg:block lg:basis-4/5 lg:translate-x-0 lg:translate-y-0",
              {
                block:
                  accountPage === "profile" ||
                  accountPage === "address" ||
                  accountPage === "orders",
              },
            )}
          />
        </div>
      </section>
    </>
  );
};
export default Account;
