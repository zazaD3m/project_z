import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <section className="container bg-bggray py-12">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8">
        <h1 className="text-2xl font-semibold">
          A Beautiful Sunday Morning Renaissance
        </h1>
        <div className="h-auto w-full">
          <img
            className="max-h-[500px] w-full object-cover"
            src={images.Blog01}
            alt="#"
          />
        </div>
        <p>
          You&apos;re only as good as your last collection, which is an enormous
          pressure. I think there is something about luxury - it&apos;s not
          something people need, but it&apos;s what they want. It really pulls
          at their heart. I have a fantastic relationship with money.Scelerisque
          sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo
          inceptos cum condimentum placerat diam venenatis blandit hac eget dis
          lacus a parturient a accumsan nisl ante vestibulum.
        </p>
        <div className="text-xs font-light">
          <span>11 / </span>
          <span>June / </span>
          <span>2023</span>
        </div>
        <div className="border-b-2 border-primary-light opacity-40"></div>

        <div>
          <Button
            asChild
            variant="ghost"
            className="justify-start gap-2 sm:pl-0 lg:hover:underline"
          >
            <Link to="/blog">
              <ArrowLeft className="-translate-y-px" />
              Back To Blog
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default SingleBlog;
