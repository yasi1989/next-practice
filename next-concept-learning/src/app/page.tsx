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
      <Link href={"/lesson07_01"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson07_01
      </Link>
      <Link href={"/lesson07_02"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson07_02
      </Link>
      <Link href={"/lesson09"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson09
      </Link>
      <Link href={"/lesson12"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson12
      </Link>
      <Link href={"/lesson13"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson13
      </Link>
      <Link href={"/lesson14"} className="border-2 rounded-md py-4 items-center justify-center flex hover:bg-slate-200">
        Lesson14
      </Link>
    </main>
  );
}
