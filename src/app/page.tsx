import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/nav/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-950">
        <div className="flex flex-col gap-[32px] my-auto text-sky-400 text-center">
          <h5 className="text-7xl">FlavorForge: Recipe & Meal Planner</h5>
          <p className="text-center text-5xl m-5">Welcome to FlavorForge! </p>
          <p className="text-center text-4xl m-5">
            Your one stop shop for meal planning and Recipe Management.
          </p>
          <p className="text-center text-3xl m-5">
            Simply select{" "}
            <span>
              <Link
                href="/meal-planner"
                className="underline decoration-3 text-sky-200 hover:text-sky-700"
              >
                Meal Planner
              </Link>
            </span>{" "}
            to view our meal planner. Select{" "}
            <span>
              <Link
                href="/recipes"
                className="underline decoration-3 text-sky-200 hover:text-sky-700"
              >
                My Recipies
              </Link>
            </span>{" "}
            to view our Recipie page.
          </p>
        </div>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-auto fixed-bottom">
          <a
            href="https://www.flaticon.com/free-icons/hamburger"
            title="hamburger icons"
          >
            Hamburger icons created by azmianshori - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/recipe"
            title="recipe icons"
          >
            Recipe icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/nutritionist"
            title="nutritionist icons"
          >
            Nutritionist icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/dashboard"
            title="dashboard icons"
          >
            Dashboard icons created by Pixel perfect - Flaticon
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
