import OrdersProductCard from "./OrdersProductCard";

const AccountOrders = () => {
  return (
    <section>
      <h2 className="text-center text-2xl">Orders</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
        <div className="h-[225px] sm:h-[280px] lg:h-[284px] xl:h-[300px]">
          <OrdersProductCard />
        </div>
      </div>
    </section>
  );
};
export default AccountOrders;
