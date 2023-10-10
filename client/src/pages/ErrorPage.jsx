import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="px-4 lg:py-12">
        <div className="lg:flex lg:gap-4">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <p className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
              {error.statusText}
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <Link
              to="/"
              className="rounded-md bg-blue-600 px-5 py-2 text-blue-100 hover:bg-blue-700"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
