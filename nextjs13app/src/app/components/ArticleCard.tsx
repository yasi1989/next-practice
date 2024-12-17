import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="shadow my-4 flex flex-col">
      <Link href={`articles/${article.id}`} className=" hover:opacity-75">
        <Image
          src={`https://picsum.photos/id/${article.id}/1000/500/`}
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          Published on {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
          {article.content.length > 70
            ? article.content.slice(0, 70) + "..."
            : article.content}
        </Link>
        <Link href={`articles/${article.id}`} className="text-slate-900">
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
