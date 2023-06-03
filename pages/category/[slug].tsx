import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostList from "components/PostList";

export async function getStaticProps({ params: { slug } }) {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  let tempStorage = [];

  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    // get publish post
    if (frontmatter.draft === false) {
      frontmatter.categories.map((category) => {
        let categroySlug = slugify(category);
        if (slug === categroySlug) {
          tempStorage.push({ post: frontmatter });
        }
      });
    } else {
      return null;
    }
  });
  //  remove null in tempPosts
  const posts = tempStorage.filter((post) => {
    return post && post;
  });
  return { props: { posts } };
}

export default function Category({ posts }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-10 post-date m-1 p-2m-auto">
          {posts.map((post, index) => {
            return <PostList key={index} posts={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
