import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex items-center justify-center px-6 py-16 text-center tablet:px-10 desktop:px-0">
      <div className="flex flex-col items-center gap-6">
        <p className="text-7xl font-medium tracking-[-0.25rem] text-peach tablet:text-9xl">
          404
        </p>

        <h1 className="text-3xl font-medium uppercase tracking-[-0.1rem] text-dark-grey tablet:text-5xl">
          Page not found
        </h1>

        <p className="max-w-md text-dark-grey/75 tablet:text-lg">
          The page you were looking for doesn't exist or may have moved.
        </p>

        <Link
          to="/"
          className="
            flex min-h-14 items-center justify-center rounded-lg bg-peach px-6 font-medium 
            uppercase tracking-[1px] text-white transition-all hover:bg-light-peach hover:text-white
          "
        >
          Go home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;