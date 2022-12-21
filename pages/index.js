import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>해수의 포트폴리오</title>
        <meta name="description" content="해수의 포폴" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">홈 입니다</h1>
    </Layout>
  );
}
