import type Post from "interfaces/post";
import PostItem from "components/PostItem";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <div className="border-t border-slate-200">
        {posts.map((post) => (
          <PostItem key={post.slug} title={post.title} date={post.date} slug={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
