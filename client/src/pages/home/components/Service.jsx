const Service = ({ data: { heading, paragraph, img } }) => {
  return (
    <section className="relative py-9 text-primary sm:px-4 sm:py-14">
      <div className="group inline-block w-full cursor-pointer">
        <div className="flex items-center justify-center gap-4">
          <div className="">
            <img
              src={img}
              alt=""
              className="h-full w-full transition-all duration-700  group-hover:[transform:rotateY(360deg)]"
            />
          </div>
          <div className="">
            <h2 className="leading-2 font-semibold sm:mb-1.5 sm:text-sm">
              {heading}
            </h2>
            <p className="leading-2 text-sm font-light sm:text-xs">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
