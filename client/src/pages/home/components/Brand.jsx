import { Link } from "react-router-dom";

const Brand = ({ data: { img, link } }) => {
  return (
    <Link to={link} className="">
      <img
        src={img}
        className="h-[132px] w-auto object-cover transition-all duration-700 ease-in-out hover:opacity-40 group-hover:[transform:rotateY(-360deg)] sm:h-[150px]"
      />
    </Link>
  );
};
export default Brand;
