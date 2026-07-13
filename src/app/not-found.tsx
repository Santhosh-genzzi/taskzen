import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-8xl font-extrabold text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-foreground">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90"
      >
        Go Back Home
      </Link>
    </div>
  );
}