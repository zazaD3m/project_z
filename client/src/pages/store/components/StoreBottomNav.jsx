const StoreBottomNav = () => {
  return (
    <div className="w-full rounded-sm bg-primary-foreground p-2.5 shadow-sm">
      <nav className="h-10">
        <div className="flex h-full items-center justify-between text-sm">
          <div className="rounded-sm bg-bggray p-2 opacity-60">
            <p>Showing 15 of 21.</p>
          </div>
          <ul className="flex  items-center gap-1">
            <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-primary-light text-primary-foreground hover:bg-primary-light hover:text-primary-foreground lg:h-10 lg:w-10">
              <span className="">1</span>
            </li>

            <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full  border hover:bg-primary-light hover:text-primary-foreground lg:h-10 lg:w-10">
              <span className="">2</span>
            </li>

            <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border hover:bg-primary-light hover:text-primary-foreground lg:h-10 lg:w-10">
              <span className="">{">"}</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default StoreBottomNav;
