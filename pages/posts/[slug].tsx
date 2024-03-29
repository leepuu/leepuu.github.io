import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "components/Container";
import Layout from "components/Layout";
import { getPostBySlug, getAllPosts } from "lib/api";
import Head from "next/head";
import { CMS_NAME } from "lib/constants";
import markdownToHtml from "lib/markdownToHtml";
import type PostType from "interfaces/post";
import PostDetail from "components/PostDetail";

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article className="mb-32 tr">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content="https://dummyimage.com/600x400/000/fff" />
              </Head>
              <PostDetail title={post.title} coverImage={post.coverImage} date={post.date} content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "author", "content", "ogImage", "coverImage"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
