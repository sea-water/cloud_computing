import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import "../pages/_app";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>해수포폴</title>
          <meta name="description" content="해수 포폴!" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 포트폴리오 :
          <span className="pl-4 text-blue-500">{projects.results}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
          {projects.results.map((aProject) => (
            <ProjectItem data={aProject} />
          ))}{" "}
          <ProjectItem data={aProject} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-18",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.이름.title[0].plain_text
  );

  /*{projects.results.map((aProject) =>(
        aProject.properties.이름.title[0]?.plain_text
    ))}*/

  console.log(`projects : ${projects}`);
  return {
    props: { projects }, // will be passed to the page component as props
  };
}
