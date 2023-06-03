import Container from "components/Container";
import Intro from "../components/Intro";
import Layout from "components/Layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "interfaces/post";
import PostList from "components/PostList";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const postList = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>푸다닥 개발뽀개기</title>
        </Head>
        <Container>
          <Intro />
          {postList.length > 0 && <PostList posts={postList} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
