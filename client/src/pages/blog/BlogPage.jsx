import BlogCard from "../../components/BlogCard";

const BlogPage = () => {
  return (
    <>
      <section className="container bg-bggray py-12">
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ">
          {[...Array(10).keys()].map((item) => (
            <div key={item} className="">
              <BlogCard className="my-0 sm:mt-0" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default BlogPage;
