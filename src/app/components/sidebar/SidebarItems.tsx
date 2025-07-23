import Image from "next/image";
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
        <span className="text-md font-bold flex items-center gap-2">
          {checkIsActive("/dashboard") ? (
            <Image src="/dashboard_outlined.png" alt="dashboard icon outlined" width={24} height={24} />
          ) : (
            <Image src="/dashboard.png" alt="dashboard icon" width={24} height={24} />
          )}
          Dashboard
        </span>
      </Link>

      <Link
        href="/recipe"
        className={
          checkIsActive("/recipe")
            ? "flex items-center w-full px-4 py-3 rounded-4xl bg-sky-400 text-black transition-all duration-200"
            : "flex items-center w-full px-4 py-3 rounded-4xl hover:bg-sky-900 transition-all duration-200"
        }
      >
        <span className="text-md font-bold flex items-center gap-2">
          {checkIsActive("/recipe") ? (
            <Image src="/mixing_outline.png" alt="mixing icon outlined" width={24} height={24} />
          ) : (
            <Image src="/mixing.png" alt="Mixing Icon" width={24} height={24} />
          )}
          Recipes
        </span>
      </Link>

      <Link
        href="/meal-planner"
        className={
          checkIsActive("/meal-planner")
            ? "flex items-center w-full px-4 py-3 rounded-4xl bg-sky-400 text-black transition-all duration-200"
            : "flex items-center w-full px-4 py-3 rounded-4xl hover:bg-sky-900 transition-all duration-200"
        }
      >
        <span className="text-md font-bold flex items-center gap-2">
          {checkIsActive("/meal-planner") ? (
            <Image src="/nutrition_plan_outline.png" alt="meal planner icon outlined" width={24} height={24} />
          ) : (
            <Image src="/nutrition_plan.png" alt="meal planner icon" width={24} height={24} />
          )}        
          Meal Planner
        </span>
      </Link>
    </>
  );
}
