import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../assets/productDetails";
import ProductPageImageSection from "./container/ProductPageImageSection";
import ProductPageDetailsSection from "./container/ProductPageDetailsSection";
import FeaturedCollection from "../home/container/FeaturedCollection";
import { useEffect } from "react";

const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const product = products.filter(
    (product) => product.id === Number(params.productId),
  )[0];

  useEffect(() => {
    if (
      product.category.toLowerCase() === params.category.toLowerCase() &&
      product.brand.toLowerCase() === params.brand.toLowerCase()
    ) {
      return;
    }
    let category;
    let brand;
    const id = product.id.toString();
    if (product.category.toLowerCase() !== params.category.toLowerCase()) {
      category = product.category.toString().toLowerCase();
    } else {
      category = params.category.toString().toLowerCase();
    }
    if (product.brand.toLowerCase() !== params.brand.toLowerCase()) {
      brand = product.brand.toString().toLowerCase();
    } else {
      brand = params.brand.toString().toLowerCase();
    }
    navigate(`/store/${category}/${brand}/${id}`);
  }, []);

  // brand:"Lenovo"
  // category:"Laptop"
  // color:"Black"
  // id:10
  // images:"/src/assets/images/catlaptop.jpg"
  // imagesArr:(6) ['/src/assets/images/catlaptop.jpg', '/src/assets/images/catmonitor.jpg', '/src/assets/images/catsmartphone2.jpg', '/src/assets/images/catsmartphone.jpg', '/src/assets/images/catsmartwatch.jpg', '/src/assets/images/catcontroller.jpg']
  // model:"ThinkPad X1 Carbon"
  // price:1099.99
  // size:"M"
  // title:"Laptop 4"
  return (
    <>
      <section className="container relative bg-bggray py-4 lg:py-12">
        <div className="flex flex-col gap-y-8 rounded-sm bg-primary-foreground p-6 shadow-sm lg:flex-row">
          <ProductPageImageSection images={product.imagesArr} />
          <ProductPageDetailsSection product={product} />
        </div>
      </section>
      <FeaturedCollection className="pb-12" />
    </>
  );
};
export default ProductPage;
