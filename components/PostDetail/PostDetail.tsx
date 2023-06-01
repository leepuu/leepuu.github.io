import DateFormatter from "components/DateFormatter";
import CoverImage from "components/CoverImage";
import markdownStyles from "./markdown-styles.module.scss";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  content: string;
};

const PostHeader = ({ title, coverImage, date, content }: Props) => {
  return (
    <div className="pt-16 text-slate-950">
      <h2 className="text-3xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight mb-12 text-center md:text-left">{title}</h2>
      <div className="mb-6 text-sm text-right">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage ? coverImage : "/assets/blog/cover/default.jpg"} />
      </div>
      <div className="flex items-start">
        {/* <div className="sticky top-32" dangerouslySetInnerHTML={{ __html: tocContent }} /> */}
        <div className="max-w-4xl mx-auto w-full">
          <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
