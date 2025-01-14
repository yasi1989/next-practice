import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 justify-center items-center constainer mx-auto px-8 md:px-16 lg:px-24 my-8">
      <Link href={"/lesson03"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson03
      </Link>
      <Link href={"/lesson04"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson04
      </Link>
      <Link href={"/lesson06"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson06
      </Link>
    </main>
  );
}
