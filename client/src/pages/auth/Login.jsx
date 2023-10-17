import { Facebook } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="container grid place-items-center bg-bggray px-6 py-20 sm:px-36 lg:px-96 xl:px-[700px]">
      <div className="flex w-full flex-col items-center rounded-md bg-primary-foreground p-8 shadow-sm">
        <h2 className="mb-4">Login</h2>
        <form
          className="h-full w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col space-y-6">
            <Input label="Email" id="loginFormEmail" type="email" />
            <Input label="Password" id="loginFormPassword" type="password" />
            <Link to="/account/recover" className="text-xs hover:text-blue-400">
              Forgot your password?
            </Link>
            <Button type="button" className="w-full rounded-lg">
              Login
            </Button>
          </div>
        </form>
        <div className="my-4 flex w-full items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary-light after:mt-0.5 after:flex-1 after:border-t after:border-primary-light">
          <p className="mx-4 mb-0 text-center font-semibold">OR</p>
        </div>
        <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
          <Button
            type="button"
            className="w-full gap-2 rounded-lg bg-[#3b5998] text-white hover:bg-[#3b5998]/80 hover:text-white lg:w-1/2"
          >
            <Facebook className="h-4 w-4 fill-current" strokeWidth={0.25} />
            Login with Facebook
          </Button>
          <Button
            type="button"
            className="w-full gap-2 rounded-lg bg-[#de5246] text-white hover:bg-[#de5246]/80 hover:text-white lg:w-1/2"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Login with Google
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Login;
