import StoreAccordion from "./StoreAccordion";

const StoreSideCategories = () => {
  return (
    <>
      <h1>Categories</h1>
      <div className="flex flex-col gap-2">
        {[
          { title: "categories", content: ["home", "smartphones", "monitors"] },
          { title: "categories", content: ["home", "smartphones", "monitors"] },
          { title: "categories", content: ["home", "smartphones", "monitors"] },
          { title: "categories", content: ["home", "smartphones", "monitors"] },
        ].map((item, i) => (
          <StoreAccordion key={item.title + i} data={item} />
        ))}
      </div>
    </>
  );
};
export default StoreSideCategories;
