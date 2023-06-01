import Container from "components/Container";

import Layout from "components/Layout";
import Profile from "components/Profile";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>푸다닥 개발뽀개기</title>
        </Head>
        <Container>
          <Profile />
        </Container>
      </Layout>
    </>
  );
}
