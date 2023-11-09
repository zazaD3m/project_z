import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  let dontRender = false;

  if (location.pathname.length === 1) {
    dontRender = true;
  } else {
    switch (crumbs[0]) {
      case "account":
        dontRender = true;
        break;
      default:
        break;
    }
  }

  return dontRender ? null : (
    <nav className="flex justify-center px-4 py-2" aria-label="Breadcrumb">
      <ol className="inline-flex flex-wrap items-center justify-center gap-y-1 space-x-1 text-sm text-primary">
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="inline-flex  items-center   hover:text-yellow hover:opacity-90"
          >
            <svg
              className="mb-0.5 mr-1.5 h-3 w-3 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => {
          currentLink += `/${crumb}`;
          return crumbs.length - 1 === i ? (
            <li className="pointer-events-none" key={crumb + i}>
              <ChevronRight className="ml-1 mr-2 inline opacity-50" />

              <Link
                to={currentLink}
                className="font-light capitalize opacity-90"
              >
                {crumb}
              </Link>
            </li>
          ) : (
            <li key={crumb + i}>
              <ChevronRight className="ml-1 mr-2 inline opacity-50" />

              <Link
                to={currentLink}
                className="capitalize hover:text-yellow hover:opacity-90"
              >
                {crumb}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
