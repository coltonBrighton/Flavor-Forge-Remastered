import Link from "next/link";

type Props = {
  checkIsActive: (path: string) => boolean;
};

export default function SidebarItems({ checkIsActive }: Props) {
  return (
    <>
      <Link
        href="/dashboard"
        className={
          checkIsActive("/dashboard")
            ? "flex items-center w-full px-4 py-3 rounded-4xl bg-sky-400 text-black transition-all duration-200"
            : "flex items-center w-full px-4 py-3 rounded-4xl hover:bg-sky-900 transition-all duration-200"
        }
      >
        <span className="text-md font-medium">Dashboard</span>
      </Link>

      <Link
        href="/recipe"
        className={
          checkIsActive("/recipe")
            ? "flex items-center w-full px-4 py-3 rounded-4xl bg-sky-400 text-black transition-all duration-200"
            : "flex items-center w-full px-4 py-3 rounded-4xl hover:bg-sky-900 transition-all duration-200"
        }
      >
        <span className="text-md font-medium">Recipes</span>
      </Link>

      <Link
        href="/meal-planner"
        className={
          checkIsActive("/meal-planner")
            ? "flex items-center w-full px-4 py-3 rounded-4xl bg-sky-400 text-black transition-all duration-200"
            : "flex items-center w-full px-4 py-3 rounded-4xl hover:bg-sky-900 transition-all duration-200"
        }
      >
        <span className="text-md font-medium">Meal Planner</span>
      </Link>
    </>
  );
}
