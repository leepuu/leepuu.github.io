import DateFormatter from "components/DateFormatter";

import Link from "next/link";
type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostItem = ({ title, date, slug }: Props) => {
  return (
    <div className="border-b border-slate-200 overflow-hidden hover:bg-slate-100 transition-all group">
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:translate-x-4 flex md:p-10 p-5 transition-all  items-center">
        <div className="flex md:items-center items-start flex-col md:flex-row flex-auto gap-2">
          <div className="md:text-sm w-40 md:w-80 w-full text-slate-700 text-xs">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="text-lg md:text-xl text-slate-950">{title}</h3>
        </div>
        <div className="flex gap-2.5 items-center text-slate-700 pl-2.5">
          <span className="text-xs hidden md:block opacity-0 group-hover:opacity-100 transition-all">Read More</span>
          <span className="w-5 block h-5">
            <svg className="w-full h-full align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
